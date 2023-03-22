import { createStyles, Card, Container, Group, Image, Title } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({

    card: {
        padding:'15px !important',
        marginLeft:'10px',
        marginRight:'10px',
        [theme.fn.largerThan(768)]: {
            maxWidth:'800px',
            height:'auto',
            borderRadius: '30px 30px 0 30px',
            ":nth-child(even)":{
                borderRadius: '30px 30px 30px 0',

                //Puntos de timeline (no agarran)
                // "::after":{
                //     position:'absolute',
                //     width:'8px',
                //     height:'8px',
                //     top:0,
                //     right:'-5px',
                //     background:'#FF7236',
                //     borderRadius:'16px',
                // }
            },
        },
      },
      
        

}));

interface CustomPillProps{
    service:string,
    image:string
}
export const CustomPill = ({service,image}:CustomPillProps) => {
    const { classes } = useStyles();
    return (
        <Card shadow="sm"  radius="xl" withBorder className={classes.card} >
            <Container>
                <Card.Section>
                    <Group>
                        <Image
                            src={ image }
                            width={25}
                            height={24}
                        />
                        <Title order={4} size={24} transform="uppercase" sx={{fontWeight:500}}> { service } </Title>
                    </Group>
                </Card.Section>
            </Container>   
        </Card>
    )
}
