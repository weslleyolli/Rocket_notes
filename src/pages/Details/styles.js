import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
    }
`;


export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;
    }

    a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: flex-end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    @media (max-width: 768px) {
        padding: 0 30px; 
        > h1 {
            font-size: 28px;
        }

        > p {
            font-size: 14px; 
        }
    }
`;
