import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./style";
import { UserCircleIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import {useUser} from '../../hooks/UserContext';

export function Header() {
    const navigate = useNavigate();
    const {pathname} = useResolvedPath();
    //console.log(pathname);
    const {logout, userInfo} = useUser();

    function logoutUser(){
        logout();
        navigate('/login');
    }

    //console.log(userInfo.name);

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                        <hr />
                        <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircleIcon color="${(props) => props.theme.white}" size={24} />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartIcon color="${(props) => props.theme.white}" size={24} />
                        <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}