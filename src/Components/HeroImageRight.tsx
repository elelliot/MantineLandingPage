import { createStyles, Container, Title, Text, Image, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'url(https://stage.starloopstudios.com/wp-content/uploads/2022/05/careers-hero.jpg)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
    height:'526px',
    minHeight:'150px'
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,
    

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
    
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>

              <Title className={classes.title} transform="uppercase">
                We are Hiring <br/>
                <Text
                  component="span"
                  inherit
                  color={"orange"}
                  >
                  Unity Developer
                </Text>
              </Title>

              <Text className={classes.description} mt={30}>
              At Starloop, we know great things happen when talent and opportunity cross paths. Join our team and help bring dreams to life!
              </Text>
          </div>
              
              <Image 
                src="https://starloopstudios.com/wp-content/uploads/2022/06/jobs-char-1.png"
                width="790px"
                height="450px"
                />
          
        </div>
      </Container>
    </div>
  );
}