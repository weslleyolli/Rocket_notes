import styled from "styled-components";
import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    @media (max-width: 768px) {
        align-items: center;  // Centraliza verticalmente no mobile
        justify-content: center;  // Centraliza horizontalmente no mobile
    }
`;

export const Form = styled.form`
    padding: 0 8.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    } 

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    @media (min-width: 641px) and (max-width: 1024px) {
        padding: 45px;
    }

    @media (max-width: 768px) {
    padding: 45px;

    > h1 {
        font-size: 32px;
    }

    > h2 {
        font-size: 20px;
        margin: 24px 0;
    }
} 
`;

export const Input = styled.input`
    width: 100%;
    padding: 16px;
    margin-bottom: 8px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 768px) {
        padding: 18px;
        font-size: 16px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    opacity: 0.5;

    @media (max-width: 768px) {
        background: none;
        display: none;
    }
`;

