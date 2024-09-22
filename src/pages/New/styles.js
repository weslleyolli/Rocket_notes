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
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 20px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 16px;
    }
`;
