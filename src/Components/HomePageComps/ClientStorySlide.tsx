import React from 'react'
import { Image,Text,createStyles } from '@mantine/core';

interface ClientStorySlideProps{
    storySumm:string,
    storyDesc:string,
    clientLogo:string,
    clientName:string,
    clientComp:string
  }


const useStyles = createStyles((theme) => ({
    clientCont:{

        padding:'15px',
        margin:'0 auto',
        [theme.fn.largerThan(991)]: {
            display:'flex',
        },
    },

    testimonyFlex:{
        [theme.fn.largerThan(991)]: {
            flexDirection:'column',
        },
    },

    storyTitle:{
        fontFamily: `Roboto`,
        paddingBottom:'20px',
        lineHeight:'1.3',
        fontSize:'14px',
        
        [theme.fn.largerThan(767)]:{
            fontSize:'17px',
        }
    },

    testimony:{
        paddingBottom:'20px',
        fontFamily: `Roboto`,
        fontSize:'14px',
        [theme.fn.largerThan(767)]:{
            fontSize:'17px',
        }
    },


    clientDataFlex:{
        display:'none',
        [theme.fn.largerThan(991)]: {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            paddingBottom:'30px'          
        },
    },


    clientId:{
        paddingBottom:'25px',
        
    },
    logoCont:{
        [theme.fn.smallerThan(980)]:{
            width:'100px',
            margin:'auto',
        },  
        [theme.fn.largerThan(980)]:{
            width:'200px',
            margin:'auto',
        }  
    },

    clientImage:{
        width:'100%',
        height:'100%',
    },

    clientData:{
        textAlign:'center',
        [theme.fn.largerThan(991)]: {
            display:'none'
        },
    },

    clientRep:{
        fontSize:'13px',
        fontFamily:'Teko',
    },

    clientCorp:{
        fontFamily:'Roboto',
        fontSize:'14px',
        [theme.fn.largerThan(767)]:{
            fontSize:'17px',
        }
    },
    

}));

export const ClientStorySlide = ({ storySumm,storyDesc,clientLogo,clientName,clientComp }:ClientStorySlideProps) => {
    const { classes } = useStyles();
  return (
        <div>
            <div className={classes.clientCont}>
                <div className={classes.testimonyFlex}>
                    <Text className={classes.storyTitle} weight={700}>{ storySumm }</Text>
                    <Text className={classes.testimony} >{ storyDesc }</Text>
                </div>
                <div className={classes.clientId}>
                    <div className={classes.logoCont}>
                        <Image src={clientLogo} className={classes.clientImage}  />
                    </div>
                    <div className={classes.clientData}>
                        <Text className={classes.clientRep} transform="uppercase" >{ clientName }</Text>
                        <Text className={classes.clientCorp} >{ clientComp }</Text>
                    </div>
                </div>    
            </div>
            {/* Only Appears if width > 991 */}
            <div className={classes.clientDataFlex}>
                <Text className={classes.clientRep} transform="uppercase" >{ clientName }</Text>
                <Text className={classes.clientCorp} >{ clientComp }</Text>
            </div>
        </div>
  )
}
