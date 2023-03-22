import React from 'react'
import { Image,
    Title,
    Text,
    createStyles,Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
const images: string[] = [
  /* ... urls of images */
  'https://starloopstudios.com/wp-content/uploads/2022/06/Generation-Zero-Cover-art.jpg',
  'https://starloopstudios.com/wp-content/uploads/2022/06/Crusader-Kings-3.jpg',
  'https://starloopstudios.com/wp-content/uploads/2022/04/portfolio-call-of-duty-1.png',
  'https://starloopstudios.com/wp-content/uploads/2022/04/portfolio-nin-five-1.png',
  'https://starloopstudios.com/wp-content/uploads/2022/04/portfolio-mutant-madness-1.png',
  'https://starloopstudios.com/wp-content/uploads/2022/06/destroy-all-humans-2-reprobed.jpg',
  'https://starloopstudios.com/wp-content/uploads/2022/04/the-quary-vertical.webp',
];
const useStyles = createStyles((theme) => ({

    inner:{
        maxWidth:'100%',
        minHeight:'780px',
        backgroundImage:
        'url(https://starloopstudios.com/wp-content/uploads/2022/04/partners-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
      color: theme.white,
      fontFamily: `Teko,Roboto, ${theme.fontFamily}`,
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: 32,
      paddingBottom:'1rem',
  
      [theme.fn.largerThan(768)]: {
        maxWidth: '100%',
        fontSize: 64,
        lineHeight: 1.15,
      },
    },

    ourPassion:{
      maxWidth: '100%',
      marginLeft:'6%',
      marginRight:'6%',
      fontFamily: `Roboto, ${theme.fontFamily}`,
      fontSize: 17,
      lineHeight: 1.25,
      paddingBottom:'40px',
      [theme.fn.largerThan(768)]: {
      },
    },
    }));

export const GamesWeWorkedWith = () => {
    const { classes } = useStyles();
    const slides = images.map((url) => (
      <Carousel.Slide key={url} >
        <Image src={url} fit="cover" radius="xl" height={400}  />
      </Carousel.Slide>
    ));
  return (
    <div className={classes.inner}>
      <Container sx={{paddingTop:'4rem',}}>
        <Title className={classes.title} transform="uppercase" align='center' inline>
            We Pursue Excellence in 2d & 3d
        </Title>
        <Text sx={{ color:'white'}} align='center' className={classes.ourPassion}>
          We are not only game developers, we are also gamers. 
          Our passion for playing games is matched only by our years of experience 
          developing titles for mobile, PC, PS4, PS5, Xbox Series X/S and Nintendo Switch.
        </Text>
      </Container>
      
      {/* Carousel */}
      <Container sx={{ height: 400, display: 'flex' }}>
          <Carousel
          sx={{ flex: 1 }}
          withIndicators
          withControls={false}
          height="100%"
          slideSize="33.333333%"
          slideGap="md"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '65%' },
          ]}
          loop
          styles={{
            indicator: {
              width: 10,
              height: 10,
              //transition: 'width 250ms ease',
    
              '&[data-active]': {
                //width: 40,
              },
            },
          }}
          //align="start"
        >
          {slides}
          </Carousel>
      </Container>
      
    </div>
  )
}
