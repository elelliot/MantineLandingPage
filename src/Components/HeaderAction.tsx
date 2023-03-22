import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Image,
    Space,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { IconChevronDown } from '@tabler/icons';
  
  const HEADER_HEIGHT = 60;
  
  const useStyles = createStyles((theme) => ({
    head:{
      [theme.fn.smallerThan(1073)]: {
        display: 'none',
      },
    },

    inner: {
      height: HEADER_HEIGHT,
      display: 'flex',
      justifyContent:'space-around',
      alignItems: 'center',
    },
  
    links: {
      //Corregir el Responsive de los Links del Header o el Header en si
      display:'flex',
      [theme.fn.smallerThan(1073)]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      textTransform:'uppercase',
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
      
    },
  
    linkLabel: {
      marginRight: 5,
    },

  }));
  
  interface HeaderActionProps {
    links: { 
      link: string; 
      label: string; 
      links?: { link: string; label: string }[] 
    }[];
  }
  
  export function HeaderAction({ links }: HeaderActionProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
      const menuItems = link.links?.map((item) => (
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      ));
  
      if (menuItems) {
        return (
          <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
            <Menu.Target>
              <a
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size={12} stroke={1.5} />
                </Center>
              </a>
            </Menu.Target>
            <Menu.Dropdown>{menuItems}</Menu.Dropdown>
          </Menu>
        );
      }
  
      return (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      );
    });
  
    return (
      <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0, position:'sticky' }} pb={70} pt={10} className={classes.head}>
        <Container className={classes.inner} size="xl">
          <Group>
                <Image 
                  src="https://starloopstudios.com/wp-content/uploads/2022/05/Starloop-Orange-SVG.svg"
                  width={'90%'}
                  height={'90%'}
                  />
          </Group>
          <Space w={40} />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Group spacing={0} className={classes.links}>
            {items}
          <Button radius="xl" sx={{ height: 40 }} color="orange">
            CONTACT US
          </Button>
          </Group>
        </Container>
      </Header>
    );
  }