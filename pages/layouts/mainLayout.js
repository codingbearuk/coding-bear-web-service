import React from 'react';
import { createGlobalStyle } from 'styled-components'
import colors from "../styles/colors";
import Header from '../components/header';

const Global = createGlobalStyle`
    body{
        margin: 0;
        background: ${ colors.darkWhite };
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
    }

    *, *::after, *::before{
        box-sizing: border-box;
    }
`;

const MainLayout = ({ children }) => (
    <>
        <Global />
        <Header />
        { children }
    </>
);

export default MainLayout;