import React from 'react'
import { createStyles,Container, Text, Title,Card, Group} from '@mantine/core'
import { ReactComponent as Check } from './Check.svg';

const useStyles = createStyles((theme) => ({


  card:{
      padding:'35px 25px !important',
      [theme.fn.largerThan(768)]:{
        
      },
      [theme.fn.largerThan(980)]:{
        minWidth:'280px',
        maxWidth:'406px'
      }
    },

    cardCont:{
      marginRight:'10px',
      marginLeft:'10px',
    },

    checkCont:{
      backgroundColor:'#ff7236',
      height:'20px',
      width:'20px',
      borderRadius:'50%',
      
    },

    check:{
      height:'20px',
      width:'15px',
      marginLeft:'2px'
    },

    cardTitle:{
      color: theme.black,
      fontFamily: `Teko,Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 300,
      fontSize: 24,
      maxWidth:'auto',
      [theme.fn.largerThan(768)]:{
      },
      [theme.fn.largerThan(980)]:{
      }
    },

    cardText:{
      fontFamily: `Roboto,Greycliff CF, ${theme.fontFamily}`,
      fontSize:17,
      lineHeight:'1.3',
      minWidth:'353px',
      [theme.fn.largerThan(768)]:{

      },
      [theme.fn.largerThan(980)]:{
        minWidth:'auto',
      }
    },

    grupo:{
      
    }
    

}));

interface WhyUsPillsProps{
  reason:string,
  reasonDesc:string
}

export const WhyUsPills = ({reason,reasonDesc}:WhyUsPillsProps) => {
  const { classes } = useStyles();
  return (
    <Card shadow="sm" radius="xl" withBorder className={ classes.card }>
      <Container className={classes.cardCont}>
        <Card.Section>
          <Group className={ classes.grupo }>
              <div className={classes.checkCont}>
                  <Check className={classes.check} />
              </div>
              <Title order={4} transform="uppercase" size='24px' className={ classes.cardTitle }>{ reason }</Title>
          </Group>
        </Card.Section>
        <Card.Section>
          <Text className={ classes.cardText } >{reasonDesc} </Text>
        </Card.Section>
      </Container>   
      </Card>
  )
    
 
}
