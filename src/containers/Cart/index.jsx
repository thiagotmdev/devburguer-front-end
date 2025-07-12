import Logo from '../../assets/logo.svg';
import { Banner, Container, Content, Title } from './styles';
import { CartItems } from '../../components/CartItems';
import { CartResume } from '../../components/CartResume';


export function Cart(){
    return(
        <div>
            <Container>
                <Banner>
                    <img src={Logo} alt="logo devburger" />
                </Banner>
                <Title> Checkout - Pedido</Title>
                <Content>
                    <CartItems/>
                    <CartResume/>
                </Content>
            </Container>
        </div>
    )
}