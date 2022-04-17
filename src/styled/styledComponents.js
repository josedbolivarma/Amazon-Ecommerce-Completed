import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* TYPOGRAPHYS */
export const LinkRedirect = styled(Link)`
    color: blue;
    font-size: .8rem;
    text-decoration: none;
`;

export const MarkPrice = styled.p`
    color: red;
    font-size: 1.2rem;
    font-weight: 400;
`;

export const TypographyStyled = styled(Typography)`
    color: #111;
    font-size: .8rem;
`;

// Buttons

export const SignInButton = styled.button`
background: #f0c14b;
borderRadius: 2px,
width: 100%;
height: 30px;
marginTop: 10px;
`;

export const SignUpButton = styled.button`
background: #f0c14c;
borderRadius: 2px;
padding: .4rem 1.2rem;
marginTop: 10px;
cursor: pointer;
`;

export const CustomAlert = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
`;

export const ButtonStyled = styled.button`
    width: 100%;
    outline: none;
    padding: .34rem .6rem;
    background-color: #333;
    color: #FFF;
    letter-spacing: 1px;
    cursor: pointer;
`;

export const ButtonGoogle = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
margin-top: .4rem;
cursor: pointer;
color: #FFF;
background: #13212c;
borderRadius: 2px;
padding: .34rem .6rem;
border: none;
outline: none;
width: 100%;
marginTop: 10px;
`;


export const ButtonFacebook = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
margin-top: .4rem;
cursor: pointer;
color: #FFF;
background: #022c4b;
borderRadius: 2px;
padding: .34rem .6rem;
border: none;
outline: none;
width: 100%;
marginTop: 10px;
`;

