import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr; //O min max é referente a primeira coluna o sideNav.

    main{
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.secondWhite};
        overflow-y: auto;
    }

    section{
        margin: 0 auto;
        padding: 40px 20px;
        max-width: 1200px;
        width: 100%;
    }
`;