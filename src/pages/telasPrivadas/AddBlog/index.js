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
  box-shadow: 0 4px 8px 0 #56268594;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding: 20px;
  overflow: auto;
  gap: 15px;

  @media (max-width: 768px){
    width: 400px;
    height: 600px;
    overflow: none;
    align-items: center;
  }
`;

const TextoForm = styled(Form.Label)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #164a65ff;
    font-size: 18px;
    margin-bottom: 5px;
    display: block;

    @media (max-width: 768px){
    font-size: 17px
  }
`;

const InputForm = styled(Form.Control)`
    border: 2px solid #3B83A6;
    font-family: 'Fredoka Variable', sans-serif;
    background-color: #e8e8e8ff;
    width: 450px;
    height: 40px;
    border-radius: 5px;

    @media (max-width: 768px){
    width: 300px;
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

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    align-items: flex-start;
    max-width: 450px; 
    margin: 0 auto;
`;

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



export default function AddBlog(){
    return(
        <>
            <Body>
                <Container>

                    <TituloPrincipal>Adicionar Novo Post</TituloPrincipal>
                    <FormWrapper>
                        <Form>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                <TextoForm>Nome do usuário:</TextoForm>
                                <InputForm as="textarea" placeholder="Insira seu nome" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupTitle">
                                <TextoForm>Título: </TextoForm>
                                <InputForm as="textarea" placeholder="Título do post"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupConteudo">
                                <TextoForm>Conteúdo: </TextoForm>
                                <InputForm 
                                as="textarea"
                                placeholder="Conteúdo do post"
                                rows={6}
                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formGroupImage">
                                <TextoForm>Imagem</TextoForm>
                                <InputForm type="file" placeholder="Imagem"/>
                            </Form.Group>
                        </Form>
                    </FormWrapper>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <StyledButton as="input" type="submit" value="Enviar" />
                        <p style={{fontSize: 12, fontFamily: 'Fredoka Variable', marginTop: 10, color: '#adadadff'}}>Apenas pessoas autorizadas tem cadastro.</p>
                    </div>
                </Container>
            </Body>
        </>
    )
}