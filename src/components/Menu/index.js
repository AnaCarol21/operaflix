import React from 'react';

import logoPng from '../../assets/logo.png';

import './styles.js';
import { MenuWrapper, ButtonLink, LogoImage } from './styles';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <MenuWrapper className="menu">
            <Link to="/">
                <LogoImage className="logo" src={logoPng} alt="Bubbleflix"/>
            </Link>

            <ButtonLink as={Link} className="buttonLink" to="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}
export default Menu;