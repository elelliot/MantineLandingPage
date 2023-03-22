import React from 'react'
import { Title,Text,createStyles,Container, Card } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { ClientStorySlide } from './ClientStorySlide';

const stories:{storySumm:string, storyDesc:string, clientLogo:string, clientName:string, clientComp:string}[] =[
  {
    storySumm:'Working with Starloop was a wholesale positive experience!',
    storyDesc:'They helped with game design, game economy, and development for some of our recent titles, like Hello Kitty Merge Town. Their professionalism and creativity throughout design, production, and implementation is something we were very happy with. We’re looking forward to working with them again in the future.',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/05/funcraft-600x335.png',
    clientName:'Michael Martinez, President',
    clientComp:'Funcraft'
  },
  {
    storySumm:'Very flexible and agile way of working with high focus on quality and core gameplay.',
    storyDesc:'Very flexible and agile way of working with high focus on quality and core gameplay. It’s great to have a partner that you can trust the ownership of the project to and is motivated to bring us the best possible results',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/05/nitro2019_logo.png',
    clientName:'Associate Producer, Nitro Games',
    clientComp:'Nitro Games'
  },
  {
    storySumm:'To excellence and beyond',
    storyDesc:'Their support and the consistent level of service provided to us has been first rate. Their dedication goes beyond what you expect in order to ensure the quality of the product. We also value their open communication and team approach.',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/02/tangelo.png',
    clientName:'Oscar Fonrodona, Managing Director',
    clientComp:'Tangelo Games'
    
  },
  {
    storySumm:'They went above and beyond to make sure we got the game ported in time.',
    storyDesc:'Thanks to their connections with companies such as Microsoft, one of the games they worked on was featured in their media outlets. Their timeliness and ability to work on tricky platforms and succeed are outstanding.',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/02/Kukouri-logo.png',
    clientName:'Kim Soares, CEO',
    clientComp:'Kukuori Mobile Entertainment'
  },
  {
    storySumm:'The communication and pace of getting things done were really good and the artist was able to adopt the graphical style of the game almost instantly.',
    storyDesc:'I was very satisfied with the collaboration. The communication and pace of getting things done were really good and the artist was able to adopt the graphical style of the game almost instantly.',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/02/super-plus.png',
    clientName:'Product Lead of Superplus Games',
    clientComp:'Superplus Games'
  },
  {
    storySumm:'Team at Starloop Studios is great!',
    storyDesc:'Very flexible and agile way of working with high focus on quality and core gameplay. It’s great to have a partner that you can trust the ownership of the project to and is motivated to bring us the best possible results.',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/05/Binamon-logo-600x185.png',
    clientName:'Leo, Chief Technology Officer ',
    clientComp:'Binamon'
  },
  {
    storySumm:'Good quality of work, autonomous and always looking for ways to help.',
    storyDesc:'Good quality of work, autonomous and always looking for ways to help. They rapidly understood and met our expectations. So nice to be stress free about their next delivery : on time and always on a par with our high quality expectations!',
    clientLogo:'https://starloopstudios.com/wp-content/uploads/2022/02/square-enix-logo.jpg',
    clientName:'',
    clientComp:'Square Enix'
  },
];


const useStyles = createStyles((theme) => ({
    inner:{
        maxWidth:'100%',
        backgroundImage:
        'url(https://starloopstudios.com/wp-content/uploads/2022/04/testimonial-bg-gray.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding:'20px 0',
        [theme.fn.largerThan(767)]: {
          padding:'35px 0',
        },
        [theme.fn.largerThan(845)]: {
          padding:'5%',
        },

    },


    title: {
        fontFamily: `Teko,Roboto, ${theme.fontFamily}`,
        fontWeight: 400,
        lineHeight: 1.05,
        fontSize: 32,
        paddingBottom:'1rem',
  
      [theme.fn.largerThan(767)]: {
        maxWidth: '100%',
        fontSize: 64,
        lineHeight: 1.15,
        "&:after":{
          //AAAAAAAAAAAAAAAAAAAAA
          content:'url(https://starloopstudios.com/wp-content/uploads/2022/04/quote-icon.png)',
        }
      },
    },

    clientSlide:{
      backgroundColor:'white',
      padding:20,
      [theme.fn.largerThan(767)]: {
        padding:40,
      },
    },

}));


export const ClientStories = () => {
    const { classes } = useStyles();
    const clientStories = stories.map(({storySumm,storyDesc,clientLogo,clientName,clientComp}) => (
        <Carousel.Slide key={clientLogo}>
          <ClientStorySlide key={ storySumm } storySumm={ storySumm } storyDesc={ storyDesc } clientLogo={ clientLogo } clientName={ clientName } clientComp={ clientComp } />
        </Carousel.Slide>
    ));
  return (
    <div className={classes.inner}>
        <Container>
            <Title 
                transform="uppercase" 
                color={"black"}
                align="center"
                weight='400'
                className={classes.title}
                >
                Stories from our 
                <Text component="span" inherit color={"#FF7236"}> Clients</Text>
            </Title>
            <Card className={ classes.clientSlide } radius='md' shadow={'0 20px 40px rgb(119 119 119 / 20%)'}>
              <Card.Section>
                  <Carousel
                      withControls={false}
                      withIndicators
                      height="100%"
                      slideGap='xl'
                      loop
                      align="center" 
                      styles={{
                        indicator: {
                          width: 10,
                          height: 10,
                          background:'#d6d6d6',
                          //transition: 'width 250ms ease',
                          '&[data-active]': {
                            //width: 40,
                            backgroundColor:'#f0b520'
                          },
                        },
                        indicators:{
                          gap:15,
                        }
                      }}
                      >
                      { clientStories }
                  </Carousel>
              </Card.Section>
            </Card>
        </Container>
    </div>
  )
}
