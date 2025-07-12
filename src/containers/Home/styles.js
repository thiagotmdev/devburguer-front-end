import styled from "styled-components";
import BannerHome from '../../assets/banner-home.png';
import BackGroundHome from '../../assets/background-home.png';

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1{
        font-family: 'Road Rage';
        color: #F4F4F4;
        font-size: 80px;
        position: absolute;
        left: 20%;
        top: 10%;
    }
`

export const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
    url('${BackGroundHome}');
    height: auto;
`;