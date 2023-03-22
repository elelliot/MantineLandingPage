import React from 'react'
import { Image,Title,Text,createStyles,Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import MediaQuery from 'react-responsive'

const images: string[] = [
    /* ... PARTNER LOGOS */
    'https://starloopstudios.com/wp-content/uploads/2021/10/partner-28-1.png',
    'https://starloopstudios.com/wp-content/uploads/2021/10/partner-27.png',
    'https://starloopstudios.com/wp-content/uploads/2021/10/partner-30.png',
    'https://starloopstudios.com/wp-content/uploads/2021/10/partner-29.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-1.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-2.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-24.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-23.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-21.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-20-1.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-19.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-18.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-17.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-16.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-15.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-14.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-13.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-12.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-11.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-10.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-9.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-8.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-7-1.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-6.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-5.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-4.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-3.png',
    'https://starloopstudios.com/wp-content/uploads/2021/06/partner-27.png',
    ];


const useStyles = createStyles((theme) => ({

    inner:{
        maxWidth:'100%',
        height:'auto',
        backgroundImage:
        'url(https://starloopstudios.com/wp-content/uploads/2022/04/partners-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop:20,
        paddingBottom:20,
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

    desc:{
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: 17,
        marginLeft:'30px',
        marginRight:'30px',
        paddingBottom:20,
    },

    carPartners:{
        height: 137,
        display: 'flex',
        maxWidth:'100%',
    },
    gridPartners:{
        maxWidth:'100%',
        height:'auto',
        display:'grid',
        gridTemplateColumns:'repeat(6, 1fr);',
        justifyItems:'center',
        
    },
    partnerCar:{
        minHeight:117,
        minWidth:117,
    },
    partnerGrid:{
        height:117,
        width:117,
    },

    }));

    

export const TrustedBy = () => {
    const { classes } = useStyles();
    //const theme = useMantineTheme();
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} fit="cover" className={classes.partnerCar}  />
        </Carousel.Slide>
      ));
    //for grid
    const partners = images.map((url) => (
        <div className={classes.partnerGrid}>
            <Image key={url} src={url} fit="cover" />
        </div>
      ));


  return (
    <div className={classes.inner}>
      <Container sx={{
        paddingTop:'2rem',
        paddingLeft:'0',
        paddingRight:'0',
        marginLeft:'0',
        marginRight:'0',
        maxWidth:1280,
        '@media (min-width: 979px)': {
            marginLeft:'auto',
            marginRight:'auto',
            paddingTop:'5%',
            paddingBottom:'5%'
          },
        }}>

        <Title className={classes.title} transform="uppercase" align='center' inline>
            Trusted By
        </Title>
        <Text sx={{ color:'white'}} align='center' className={classes.desc}>
        We are proud to support industry leaders around the world.
        </Text>

        {/* smallerThan largerThan */}
        <MediaQuery maxWidth={978} >
            <div className={classes.carPartners}>
                <Carousel
                withControls={false}
                height="100%"
                slideSize="15%"
                slideGap='xl'
                dragFree
                loop
                align="center" 
                >
                {slides}
                </Carousel>
            </div>
        </MediaQuery> 
        <MediaQuery minWidth={979}>
            <div className={classes.gridPartners}>
                {partners}
            </div>
        </MediaQuery>

      </Container>
      
    </div>
  )

}