import { createStyles,Container, Text, Title, Box, Card, Group, Image,Button, Center, BackgroundImage } from '@mantine/core'
import React from 'react'
import { CustomPill } from './CustomPill';
import { WhyUs } from './WhyUs';

const services:{service:string, image:string}[] =[
    {
        service:'Full-Cycle Game Production',
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-fullgame-orange.svg'
    },
    {
        service:'Co-Development', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-codev-orange.svg'
    },
    {
        service:'Game Prototyping', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-game-prototype-orange.svg'
    },
    {
        service:'NFT Game Development', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-nft-orange.svg'
    },
    {
        service:'Game Porting', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-game-porting-orange.svg'
    },
    {
        service:'Game Video Ads', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/04/icon-video-ads.svg'
    },
    {
        service:'Game VFX', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-game-vfx-orange.svg'
    },
    {
        service:'Game Art Solutions', 
        image:'https://starloopstudios.com/wp-content/uploads/2022/05/icon-game-art-orange.svg'
    },

]

const useStyles = createStyles((theme) => ({
    root: {
      backgroundImage:
        'url(https://starloopstudios.com/wp-content/uploads/2022/04/end-to-end-bg.jpg)',
      
      maxWidth:'100%',
      paddingTop:'30px',
      [theme.fn.largerThan(768)]:{
        paddingBottom:'50px',
        paddingTop: theme.spacing.xl * 3,
      }
    },

    title:{
        fontSize:32,
        [theme.fn.largerThan(768)]:{
            fontSize:64
        }
    },
  
    description: {
        fontFamily: `Roboto,Greycliff CF, ${theme.fontFamily}`,
        fontSize:'17px',
        paddingBottom:'47px !important'
    },

    cards:{
        display:'flex',
        flexDirection:'column',
        rowGap:'25px',
        paddingBottom:'30px',
        [theme.fn.largerThan(768)]:{
            maxWidth:'800px',
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            marginLeft:'auto',
            marginRight:'auto',

        }, 
        //Timeline (Line)  
        // "&::before":{
        //     backgroundColor:'orange',//rgba(255, 138, 88, 0.4)
        //     width:'11px',
        //     height:'100%',
        //     position:'absolute',
        //     left:'50%'
        // }


    },
    
  }));



export const Services = () => {
const { classes } = useStyles();
  return (
    <Container className={classes.root}>
        <Container pt={20}>
            <Title 
                transform="uppercase" 
                color={"#FF7236"}
                align="center"
                weight='400'
                className={classes.title}
                >
                Game Development and Art 
                <Text component="span" inherit color={"black"}> Services</Text>
            </Title>
            
            <Text align="center" pb={20} className={classes.description}>Rely on our hands-on experience in shipping top-notch games and win the hearts of your audience.</Text>
        </Container>

        <Box className={classes.cards}>
            { services.map( ({service, image}) =>(
                <CustomPill key={ image } service={ service } image={ image } />
                ))}
        </Box>

        <Center>
            <Button uppercase radius="xl" sx={{ height: 40  }} styles={(theme) => ({
                root: {
                    backgroundColor:'#FF7236',
                    fontSize:'23px',
                    fontFamily:`Teko,Greycliff CF, ${theme.fontFamily}`,
                    fontWeight:300
                }
            })}>
                See More Services
            </Button>
        </Center>
        <WhyUs />
    </Container>
  )
}