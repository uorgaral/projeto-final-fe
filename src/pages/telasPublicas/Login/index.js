import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import fundo from '../../../img/FundoImg.png'
import Button from 'react-bootstrap/Button';
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    position: relative;
    
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: #a3f0ffa2; 
        z-index: 1;
  }

   @media (max-width: 768px){
        background-image: url(${fundo});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
    }
`;

const Container = styled.div`
  background-color: #fefefeff;
  box-shadow: 0 4px 8px 0 #56268594;
  width: 500px;
  min-height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding: 20px;

  @media (max-width: 768px){
    width: 300px;
    height: 400px;
  }
`;

const TextoForm = styled(Form.Label)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #164a65ff;
    font-size: 20px;

    @media (max-width: 768px){
    font-size: 17px
  }
`;

const InputForm = styled(Form.Control)`
    border: 2px solid #3B83A6;
    font-family: 'Fredoka Variable', sans-serif;
    background-color: #e8e8e8ff;
    width: 350px;
    height: 40px;

    @media (max-width: 768px){
    width: 240px;
    height: 40px;
  }
`;


const StyledButton = styled(Button)`
    font-family: 'Fredoka Variable', sans-serif;
    font-size: 20px;
    background-color: #683f91ff;
    color: #ffffffff;
    border: none;
    padding: 10px;
    border-radius: 7px;

    &:hover{
        background-color: #195674;
    };
`

//TITULOS
const TituloPrincipal = styled.h1`
    font-family: "Chicle", serif !important;
    color: #5C1D9C;
    font-size: 80px;
    text-shadow: 1px 0.5px 1px #58268b65;
    margin-inline: 30px;

    @media (max-width: 768px){
        font-size: 40px;
        margin-inline: 10px;
    }
`;

const Subtitulo = styled.p`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #3B83A6;
    font-size: 30px;
    text-shadow: 1px 0.5px 1px #58268b65;
    margin-left: 20px;
    margin-bottom: 0;
`;




export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
        const navigate = useNavigate();
    
        const executaSubmit = async (event) =>{
            event.preventDefault();//previne recarregamento padrão da página
            setLoading(true);
            setError('');
    
            try{
                const resposta = await fetch('http://localhost:3000/login',{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email,senha}),//envia dados como json
                });
                const dados = await resposta.json();//lê os dados como JSON
    
                if(resposta.ok){
                    alert('Login bem-sucedido');
                    console.log('Dados da API', dados);
                    localStorage.setItem('usuario', JSON.stringify(dados.usuario));// salva dados usuário localstorage
                    navigate('/');
                }else{
                    setError(dados.message ||'Erro ao fazer Login. Tente novamente');
                }
    
            }catch(erro){
                console.log('Falha ao conectar a API', erro);
                setError('Não foi possível conectar ao servidor. Verifique sua conexão' + erro);
            }finally{
                setLoading(false);
            }
        }

    return(
        <>
            <Body>
                <Container>

                    <TituloPrincipal>Login</TituloPrincipal>

                    <Form onSubmit={executaSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                            <TextoForm>Insira seu e-mail:</TextoForm>
                            <InputForm type="email" className="form-control" id="email" name="email" placeholder="Insira seu E-mail"value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <TextoForm>Insira sua senha:</TextoForm>
                            <InputForm type="password" className="form-control" id="senha" name="senha" placeholder="Insira sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                        </Form.Group>
                        
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <StyledButton type="submit" disabled={loading}>{loading ? 'Entrando...': 'Login'}</StyledButton>
                        <p style={{fontSize: 12, fontFamily: 'Fredoka Variable', marginTop: 10, color: '#cbcbcbff'}}>Apenas pessoas autorizadas tem cadastro.</p>
                    </div>
                    </Form>

                    
                </Container>
            </Body>
        </>
        
    )
}