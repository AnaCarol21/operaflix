import React from 'react';

import logoPng from '../../assets/logo.png';

import './styles.css';
import { Button } from '../Button/styles';

function Menu () {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={logoPng} alt="Bubbleflix"/>
            </a>

            <Button className="buttonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}
export default Menu;