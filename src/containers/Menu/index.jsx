import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Banner, CategoryButton, CategoryMenu, Container, ProductsContainer } from "./style";
import { CardProduct } from '../../components/CardProduct';
import { formatPrice } from '../../utils/formatPrice';
import { replace, useLocation, useNavigate } from "react-router-dom";

export function Menu() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();

    const {search} = useLocation();

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria'); //Esse + transforma a query em inteiro.

        if(categoryId){
            return categoryId; //Aqui esse retorno envia diretamentepara o activeCategory.
        }

        return 0;
    });



    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data.map((product) => (
                { currencyValue: formatPrice(product.price), ...product, }
            ));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                (products) => products.category_id === activeCategory,
            );

            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);


    return (
        <main>
            <Container>
                <Banner>
                    <h1>
                        O MELHOR <br />
                        HAMBURGER <br />
                        ESTÀ AQUI!
                        <span>Esse cardápio está irresistível!</span>
                    </h1>
                </Banner>

                <CategoryMenu>
                    {categories.map((category) => (
                        <CategoryButton
                            key={category.id}
                            $isActiveCategory={category.id === activeCategory}
                            onClick={() => {
                                navigate(
                                    {
                                        pathname: '/cardapio',
                                        search: `?categoria=${category.id}`,
                                    },
                                    {
                                        replace: true,
                                    },
                                );
                                setActiveCategory(category.id)
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
                </CategoryMenu>

                <ProductsContainer>
                    {filteredProducts.map((product) => (
                        <CardProduct product={product} key={product.id} />
                    ))}
                </ProductsContainer>
            </Container>
        </main>
    )
}