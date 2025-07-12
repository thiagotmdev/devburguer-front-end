import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {formatPrice} from '../../utils/formatPrice';

import { Container, ContainerItems, Title } from './style';
import { CardProduct } from '../CardProduct';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            //Filtra somentes as ofertas.
            const onlyOffers = data.filter(product => product.offer).map((product) => (
                {currencyValue: formatPrice(product.price), ...product}
            )); 

            setOffers(onlyOffers);
        }

        loadProducts();
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    }

    return (
        <Container>
            <Title>Ofertas do Dia</Title>

            {/* Se ficar muitos códigos nessa área o melhor é criar um componente. */}

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='carousel-item'
            >
                {offers.map((product) => (
                    // <ContainerItems key={product.id} imageUrl={product.url}>
                    //     <p>{product.name}</p>
                    // </ContainerItems>
                    <CardProduct key={product.id} product={product}/>
                ))}
            </Carousel>
        </Container>
    );
}