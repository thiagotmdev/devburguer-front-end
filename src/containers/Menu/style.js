import styled from "styled-components";
import BannerHamburger from '../../assets/hamburger-banner.png';
import BackGroundHome from '../../assets/background-home.png';
//import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.darkWhite};

    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
    url('${BackGroundHome}');
    height: auto;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: ${props => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    h1{
        font-family: ${(props) => props.theme.roadRageFont};
        font-size: 80px;
        line-height: 65px;
        position: absolute;
        color: ${(props) => props.theme.white};

        right: 20%;
        top: 30%;
    }

    span{
        display: block;
        color: ${(props) => props.theme.white};
        font-size: 20px;
        font-weight: 400;
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : (props) => props.theme.gray)};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0; //Esse 0 impede de deixar faixa branca sem background no final do container.
`;