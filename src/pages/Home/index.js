import React from 'react';
import { AppWrapper } from './styles';

import Menu from '../../components/Menu';
import initialData from '../../data/initialData.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return ( 
  <AppWrapper>
    <Menu />

  <BannerMain
    videoTitle={initialData.categorias[0].videos[0].titulo}
    url={initialData.categorias[0].videos[0].url}
    videoDescription={"The Best of Bach"}
  />

  <Carousel
    ignoreFirstVideo
    category={initialData.categorias[0]}
  />

  <Carousel
    category={initialData.categorias[1]}
  />

  <Carousel
    category={initialData.categorias[2]}
  />      

  <Carousel
    category={initialData.categorias[3]}
  />      

  <Footer />
</AppWrapper>
  );
}

export default Home;
