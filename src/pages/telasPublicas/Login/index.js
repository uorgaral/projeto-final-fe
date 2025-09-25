import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import fundo from '../../../img/FundoImg.png'
import Button from 'react-bootstrap/Button';


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
  box-shadow: 0 4px 8px 0 #4321667d;
  width: 500px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width: 768px){
    width: 300px;
    height: 400px;
  }
`;

const TextoForm = styled(Form.Label)`
    font-family: 'Fredoka Variable', sans-serif;
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

const TituloPrincipal = styled.h1`
    font-family: 'Style Script', sans-serif !important;
    color: #683f91ff;
    font-size: 60px;
    text-shadow: 2px 1px 2px #58268b65;

    @media (max-width: 768px){
        font-size: 50px
    };
`
const StyledButton = styled(Button)`
    font-family: 'Fredoka Variable', sans-serif;
    font-size: 20px;
    background-color: #683f91ff;
    color: #ffffffff;
    border: none;
    padding: 10px;
    border-radius: 7px;

    &:hover{
        background-color: #361953ff;
    };
`



export default function Login(){
    return(
        <>
            <Body>
                <Container>

                    <TituloPrincipal>Login</TituloPrincipal>

                    <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                            <TextoForm>Insira seu e-mail:</TextoForm>
                            <InputForm type="email" placeholder="e-mail" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <TextoForm>Insira sua senha:</TextoForm>
                            <InputForm type="password" placeholder="senha"/>
                        </Form.Group>
                    </Form>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <StyledButton as="input" type="submit" value="Enviar" />
                        <p style={{fontSize: 12, fontFamily: 'Fredoka Variable', marginTop: 10, color: '#cbcbcbff'}}>Apenas pessoas autorizadas tem cadastro.</p>
                    </div>
                </Container>
            </Body>
        </>
        
    )
}