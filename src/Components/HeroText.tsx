import { createStyles, Title, Text, Button, Container } from '@mantine/core';
//import { Dots } from './Dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 40,
    paddingBottom: 80,
    backgroundColor:'#F76707',

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    verticalAlign:'center',
    textAlign: 'center',
    fontSize: 40,
    color:theme.white,
    paddingTop:'3rem',
    paddingBottom:'1rem',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textTransform:'uppercase',

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',
    color:'white',
    fontSize: 17,
    
    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    transition:'ease-in-out .3s',

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
    '&:hover': {
      color: '#F76707',
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} fluid >
      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}

      <div className={classes.inner}>
        <Title className={classes.title}>
          Become a Starloopian
        </Title>

        <Container p={0} size={1200}>
          <Text size="lg" color="dimmed" className={classes.description}>
          We’re always looking for talented, curious, creative problem solvers to work with us. 
          Many roles are available that allow team members to express their talent and put their expertise to work. 
          Learn more about our jobs and discover what best fits your talent or skills.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" uppercase radius="xl" >
            See Open Job Positions
          </Button>
        </div>
      </div>
    </Container>
  );
}