import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 105px auto 1fr 64px;
        grid-template-areas: 
        "header"
        "search"
        "content"
        "newnote";

        overflow-y: auto;
    }
`;

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;

    @media (max-width: 768px) {
        padding-left: 12px;
        padding-top: 12px;
        padding-right: 12px; 
    }
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`;