import { createStyles, Text, Container, ActionIcon, Group, Anchor } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons';
const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : "rgb(68,68,68)",
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.xl * 2,
    paddingLeft: theme.spacing.xl * 1.25,
    maxWidth:'70%',

    [theme.fn.smallerThan('xl')]:{
        maxWidth:'100%',
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    
    

    // [theme.fn.smallerThan('sm')]: {
    //   display: 'none',
    // },
  },

  wrapper: {
    width: 260,
    marginRight:'2rem'
    // [theme.fn.smallerThan('sm')]:{

    // }
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : "#b4b0ae",
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.white,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth:'100%',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xs,
    backgroundColor:"rgba(56, 56, 56, 1)",

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    flexDirection:'column',
    justifyContent:'initial',
    marginTop: theme.spacing.xs,
    
  },
  
  footerlinkstwo:{
    display:'flex',
  },
  
  bottomLink:{
    paddingLeft:theme.spacing.sm,
    paddingRight:theme.spacing.sm,
  },

  footerLogo:{
    minHeight:'50px',
    maxWidth:'100%',
    maxHeight:'100%',
  }
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        {/* <div className={classes.logo}>
          <MantineLogo size={30} />
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div> */}
        <div className={classes.groups}>{groups}</div>
        <Group spacing={0} className={classes.social} position="right" noWrap>
        <ActionIcon size="lg">
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          
        </Group>
      </Container>
      <Container className={classes.afterFooter}>
        <Anchor component='a'>
            <img className={classes.footerLogo} src="https://starloopstudios.com/wp-content/uploads/2022/05/Starloop-White-SVG.svg" alt="" 
            data-lazy-src="https://starloopstudios.com/wp-content/uploads/2022/05/Starloop-White-SVG.svg" data-ll-status="loaded" />
        </Anchor>
        <div className={classes.footerlinkstwo}>
            <Anchor className={classes.bottomLink} href="#" target="_blank">
                Privacy Policy
            </Anchor>
            <Anchor className={classes.bottomLink} href="#" target="_blank">
                Legal Advice
            </Anchor>
            <Anchor className={classes.bottomLink} href="#" target="_blank">
                Cookie Policy
            </Anchor>
            <Anchor className={classes.bottomLink} href="#" target="_blank">
                Sitemap
            </Anchor>
        </div>
        <Text color="white" size="sm">
        Copyright © 2022, Starloop Studios. All rights reserved.
        </Text>

        
        
      </Container>
    </footer>
  );
}