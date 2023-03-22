import React from 'react'
import { Carousel } from '@mantine/carousel';
import { createStyles,Container, Image } from '@mantine/core';

const images: string[] = [
    /* ... urls of images */
    'https://starloopstudios.com/wp-content/uploads/2022/04/hero-slider-item-1.jpg',
    'https://starloopstudios.com/wp-content/uploads/2022/06/slider-2-background-Game-Co-development.png',
    'https://starloopstudios.com/wp-content/uploads/2022/04/hero-slider-item-5.jpg',
    'https://starloopstudios.com/wp-content/uploads/2022/04/hero-slider-item-4.jpg',
    'https://starloopstudios.com/wp-content/uploads/2022/06/slider-3-background-Game-porting-e1655710328830.png'
];

const useStyles = createStyles((theme) => ({
    carousel:{

    },
    inner:{
        maxWidth:'100%',
        minHeight:'510px',
        paddingLeft:'0',
        paddingRight:'0',
    },
    }));

export const ImageCarousel = () => {
    const { classes } = useStyles();
    const slides = images.map((url) => (
        <Carousel.Slide key={url} >
          <Image src={url} height={720}/>
        </Carousel.Slide>
      ));
  return (
    <Container className={classes.inner}>
        <Carousel className={classes.carousel} 
            height={600}  
            withIndicators 
            withControls={false} 
            draggable={false}
            >
        {slides}
        </Carousel>
    </Container>
  )
}
