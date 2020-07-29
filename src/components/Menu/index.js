import React from 'react';

import logoPng from '../../assets/logo.png';

import './styles.css';
import { Button } from '../Button/styles';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={logoPng} alt="Bubbleflix"/>
            </Link>

            <Button as={Link} className="buttonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}
export default Menu;