import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"

import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import Logo from '../../assets/logo.svg'
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useUser } from "../../hooks/UserContext";

export function Login() {
    const navigate = useNavigate();
    const {putUserData} = useUser();
    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    // const onSubmit = (data) => console.log(data)

    // const onSubmit = (data) => {
    //   const response =  api.post('/session',{
    //         email: data.email,
    //         password: data.password
    //     });

    //     console.log(response);
    // }

    const onSubmit = async (data) => {
        // const {data: {token}} = await toast.promise(api.post('/session', {
        const { data: userData } = await toast.promise(api.post('/session', {
            email: data.email,
            password: data.password
        }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() { //Esse render está vindo da documentação do Toast
                        setTimeout(() => {
                            // navigate('/');
                            if(userData.admin){
                                navigate('/admin/pedidos');
                            }else{
                                navigate('/');
                            }
                        }, 2000);
                        return "Seja Bem-vindo(a)";
                    },
                },
                //success: 'Seja Bem-vindo(a)',
                error: 'E-mail ou senha incorretos',
            },
        );

        //console.log(response);
        // localStorage.setItem('token', token);
        putUserData(userData);
    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha. </span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>E-mail</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>

                <p>
                    Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    )
}