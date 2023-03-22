import React from 'react'
import { createStyles,Container, Text, Title, Box} from '@mantine/core'
import { WhyUsPills } from './WhyUsPills';

const reasonsWhyUs:{reason:string, reasonDesc:string}[] =[
    {
        reason:'Faster Delivery of Output',
        reasonDesc:'A skilled crew and specialization of the roles allow you to cut the development and production time, and you will be able to launch your new projects soonest. The sooner the launch, the faster you get your ROI'
    },
    {
        reason:'Communication and Transparency',
        reasonDesc:'We have a set of methods and tools, such as Agile or Jira, to empower communication and transparency that allow us to reach an improved performance.'
    },
    {
        reason:'Risk Mitigation',
        reasonDesc:'We rely on prototyping, pre-production decision points, and agile approaches to contain risk on our client’s project. So there are no delays and the work process goes seamlessly.'
    },
    {
        reason:'Agile and Scrum processes',
        reasonDesc:'Agility is all about bringing ease to our clients. We have formulated our development process to make things as simple and easy for our clients as they can be.'
    },
    {
        reason:'Financial Savings & high level of Efficiency',
        reasonDesc:'You can save 40% or more compared to the cost of in-house development. You don’t have to bear any overhead costs. You pay only for the actual time our team works on your project.'
    },
    {
        reason:'Reliable Gaming Solution',
        reasonDesc:'Some of our games have 100 million+ downloads, and we’ve worked with a range of companies from startups to Fortune 500 organisations.'
    }];
const useStyles = createStyles((theme) => ({
    root: {
        backgroundImage:'url(https://starloopstudios.com/wp-content/uploads/2022/04/spike-hair.png)',
        backgroundSize: 'auto',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'0% 50%',
        
        maxWidth:'100%',
        paddingTop:'34px',
        [theme.fn.largerThan(768)]:{
            display:'flex',
            paddingLeft:'0px',
            paddingRight:'30px',
            
        },
        [theme.fn.largerThan(980)]:{
            display:'flex',
            justifyContent:'center',
            paddingLeft:'0px',
            paddingRight:'30px',
            paddingTop: theme.spacing.xl * 3,
        }
      },

      inner:{
        [theme.fn.largerThan(768)]:{
            flexDirection:'column',
            width:'66.666667%',
            padding:'10px 20px 0px'
        },
        [theme.fn.largerThan(980)]:{
            flexDirection:'column',
            maxWidth:'50%',
            padding:'10px 20px 0px',
        }
      },
      inner2:{
        
        [theme.fn.largerThan(768)]:{
            width:'33.333333%',
        },
        [theme.fn.largerThan(980)]:{
            maxWidth:'50%',
            padding:'10px 20px 0px',
        }
      },

    title:{
        fontSize:32,
        [theme.fn.largerThan(768)]:{
            fontSize:48
        },
        [theme.fn.largerThan(980)]:{
        }
    },

  
    description: {
        fontFamily: `Roboto`,
        fontSize:'17px',
        paddingBottom:'20px',
        lineHeight:'1.3',
        
        [theme.fn.largerThan(980)]:{
            maxWidth:'783px'
        }
    },

    cards:{
        display:'flex',
        flexDirection:'column',
        rowGap:'25px',
        paddingBottom:'50px',
        
        [theme.fn.largerThan(980)]: {
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            width:'50%',
            gap:'25px',
        }
    },
  }));
export const WhyUs = () => {
const { classes } = useStyles();
  return (
    <Container className={classes.root}>

        <div className={classes.inner2}>

        </div>
        <div className={classes.inner}>
            <Title 
                transform="uppercase" 
                color={"black"}
                align="left"
                weight='400'
                className={classes.title}
                >
                Why 
                <Text component="span" inherit color={"#FF7236"}> Starloop</Text>
                <Text component="span" inherit color={"black"}> Studios</Text>
            </Title>
            <Text align="left"  className={classes.description}>Our team of 150+ software engineers, artists and designers have immense experience in 
            developing games for more than 12 years. They are aware of all the trends and keep an eye on innovation to provide our clients with the best solutions.</Text>
            
            <Box className={ classes.cards }>
                    
                { reasonsWhyUs.map( ({reason,reasonDesc}) =>(
                    <WhyUsPills key={ reason } reason={ reason } reasonDesc={ reasonDesc }/>
                    ))}
                    
            </Box>
            {/* END CARDS */}
        </div>
    </Container>
  )
}
