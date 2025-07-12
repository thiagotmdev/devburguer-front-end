import Cart from '../../assets/cart.png';
import { ContainerButton } from './style';

export function CartButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt='carrinho-de-compras' />
        </ContainerButton>
    );
}