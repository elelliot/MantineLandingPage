import { Image,
        Group,
        Card,
        Box,
        Title,
        Text,
        createStyles,Container } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    
    inner:{
        maxWidth:'100%',
        minHeight:'720px',
        backgroundImage:
        'url(https://starloopstudios.com/wp-content/uploads/2022/04/asteroid-gray.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
        color: theme.black,
        fontFamily: `Teko,Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 500,
        fontSize: 50,
        paddingBottom:'10px',
        maxWidth:'50%',
    
        [theme.fn.smallerThan('md')]: {
          maxWidth: '100%',
          fontSize: 32,
          lineHeight: 1.15,
        },
        [theme.fn.largerThan(768)]:{

        }
      },

      desc: {
        paddingLeft:'5%',
        paddingTop:'5%',
        paddingRight:'5%',
        paddingBottom:'25px',
        [theme.fn.largerThan(768)]: {
            // '&:hover':{
            //     backgroundColor:'red'
            // }
            //paddingLeft:'20%',
            //textAlign:'left'
            
          },
      },

      about:{
        fontFamily:`Roboto,Greycliff CF, ${theme.fontFamily}`,
        maxWidth:'100%',
        fontSize:'17px',
        lineHeight:'1.3',
        [theme.fn.largerThan(768)]: {
            maxWidth:'65%',
            width:'auto',
            textAlign:'left',
        },
      },

      cards:{
          display:'flex',
          flexDirection:'column',
          rowGap:'25px',
          marginLeft:'25px',
          marginRight:'25px',
          paddingBottom:'50px',
          [theme.fn.largerThan(980)]: {
            //sx={{ display:'flex', justifyContent:'center', paddingTop:'2rem', gap:'25px' }
            flexDirection:'row',
            justifyContent:'center',
            paddingTop:'2rem',
            gap:'25px'
        }
      },

      card:{
          padding:'35px !important',
          width:'auto',
          height:'auto',
        [theme.fn.largerThan(980)]:{
            //minWidth:'auto',
            //maxWidth:'270px',
            width:'270px',
            height:'auto'
        }
      },

      cardTitle:{
        color: theme.black,
        fontFamily: `Teko,Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 300,
        fontSize: 24,
        maxWidth:'50%',
      },

      cardText:{
        fontFamily: `Roboto,Greycliff CF, ${theme.fontFamily}`,
        fontSize:17,
      }
    }));

export const AboutStarloop = () => {
    const { classes } = useStyles();
  return (
        <Container className={ classes.inner }>
            <div className={ classes.desc }>
                <div>
                    <Title className={ classes.title } transform="uppercase">
                        Game Dev and Art Outsourcing Made Simple
                    </Title>
                </div>
                    <Text className={ classes.about }>
                        Starloop Studios is a leading game development company, providing premium quality game art 
                        and game development services to publishers and game developers since 2011. 
                        We also have a quality range of flexible offerings, including cybersecurity, 
                        software development, video production, VFX, art and animation, and more. 
                        Our team is a tight-knit group of seasoned producers, developers, software engineers, 
                        designers, and senior artists that are ready to go the extra mile to deliver incredible 
                        results. 
                    </Text>
            </div> 
            {/* CARDS */}
            <Box className={ classes.cards }>
                <Card shadow="sm" radius="xl" withBorder className={ classes.card }>
                    <Container>
                        <Card.Section >
                            <Group>
                                <Image
                                    src="https://starloopstudios.com/wp-content/uploads/2022/04/icon-years.svg"
                                    width={29}
                                    height={28}
                                />
                                <Title order={4} transform="uppercase" size='24px' className={ classes.cardTitle }>World Class Experience</Title>
                            </Group>
                        </Card.Section>
                        <Card.Section>
                            <Text className={ classes.cardText } >
                                Since our inception in 2011, we take pride in delivering incredible 
                                games, leveraging the talent of highly creative professionals.
                            </Text>
                        </Card.Section>
                    </Container>   
                </Card>

                <Card shadow="sm" radius="xl" withBorder className={classes.card} >
                    <Container>
                        <Card.Section >
                            <Group>
                                <Image
                                    src="https://starloopstudios.com/wp-content/uploads/2022/04/icon-projects.svg"
                                    width={29}
                                    height={28}
                                />
                                <Title order={4} transform="uppercase" size='24px' className={ classes.cardTitle }>300+ Projects</Title>
                            </Group>
                        </Card.Section>
                        <Card.Section>
                            <Text className={ classes.cardText }>
                            We have produced more than 300 games for PC, mobile, console and 
                            VR/AR platforms in multiple genres.
                            </Text>
                        </Card.Section>
                    </Container>   
                </Card>

                <Card shadow="sm" radius="xl" withBorder className={classes.card} >
                    <Container>
                        <Card.Section >
                            <Group>
                                <Image
                                    src="https://starloopstudios.com/wp-content/uploads/2022/04/icon-numbers.svg"
                                    width={29}
                                    height={28}
                                />
                                <Title order={4} transform="uppercase" size='24px' className={ classes.cardTitle }>200+ Clients</Title>
                            </Group>
                        </Card.Section>
                        <Card.Section>
                            <Text className={ classes.cardText }>
                            AAA Game Publishers and World Class brands trust us with their IP and projects.
                            </Text>
                        </Card.Section>
                    </Container>   
                </Card>

                <Card shadow="sm" radius="xl" withBorder className={classes.card} >
                    <Container >
                        <Card.Section>
                            <Group>
                                <Image
                                    src="https://starloopstudios.com/wp-content/uploads/2022/04/icon-numbers.svg"
                                    width={29}
                                    height={28}
                                />
                                <Title order={4} transform="uppercase" size='24px' className={ classes.cardTitle }>600+ EMPLOYEES</Title>
                            </Group>
                        </Card.Section>
                        <Card.Section>
                            <Text className={ classes.cardText }>
                                We unite up to more than 600 professionals based in 12 countries worldwide.
                            </Text>
                        </Card.Section>
                    </Container>   
                </Card>
            </Box>
            {/* END CARDS */}

        </Container>
  )
}
