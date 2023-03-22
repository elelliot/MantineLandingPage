import React from 'react';
import { createStyles, List, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    root: {
        padding: theme.spacing.xl * 1.5,
        paddingTop: theme.spacing.xl * 2,
        [theme.fn.largerThan('xl')]: {
            paddingTop: theme.spacing.xl * 4,
            paddingLeft: theme.spacing.xl * 16,
            paddingRight: theme.spacing.xl * 16,
          },
    },
    paragraph:{
        paddingBottom:theme.spacing.xl * 1
    },
    orangeText:{
        color:'orange'
    }
  }));

export const JobDescription = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
        <Text
            sx={{paddingBottom:'1rem'}}
        >  
        Job title: Unity Developer <br/>
        Location: Full-time, permanently remote
        </Text>

        
        <Text sx={{ paddingBottom:'1rem'}}>
        <Text span className={classes.orangeText}>Starloop Studios</Text>
        {' '}is a leading international game development service provider. Known for its production capacity, outstanding talent, 
        and AAA-quality projects to the international gaming scene.
        </Text>

        <Text sx={{ paddingBottom:'1rem' }}>
        We are proud members of <Text span className={classes.orangeText}>Magic Media</Text> 
        {' '},a media and tech start-up powered by creativity and innovation. 
        As part of this international group, we deliver expertise in the areas of art, animation, cybersecurity, game development, software development, 
        and VFX amongst others. Together, we provide support and innovative solutions designed around our clients needs and carried out by our industry veterans.
        </Text>
        
        <Text sx={{ paddingBottom:'1rem' }}>
        We are looking for a Unity Developer who is self-motivated, goal-orientated, and a strong team player. 
        The ideal candidate will have extensive full-time Unity programming experience in games. We are looking for someone who is passionate about the 
        digital content production process and who is willing to work with content creators and engineers of other disciplines to build awesome games.
        </Text>

        <Text sx={{ paddingBottom:'1rem', fontWeight:'bold'}}>Responsibilities</Text>
        <List withPadding sx={{ paddingBottom:'1rem'}}>
            <List.Item>Implement and improve a variety of fast and efficient core software using Unity</List.Item>
            <List.Item>Maintain and build code using C# for all assigned work streams</List.Item>
            <List.Item>Help provide architectural oversight across the entire application</List.Item>
            <List.Item>Collaborate to devise optimal engineering solutions to technical challenges</List.Item>
        </List>
        
        <Text sx={{ paddingBottom:'1rem', fontWeight:'bold'}}>Requirements</Text>
        <List withPadding sx={{ paddingBottom:'1rem'}}>
            <List.Item>2 years of experience in Unity</List.Item>
            <List.Item>Proficient with the .Net framework, its memory management</List.Item>
            <List.Item>Performance optimization experience</List.Item>
            <List.Item>Passion for video games!</List.Item>
            <List.Item>Proficient English skills</List.Item>
        </List>
        
        <Text sx={{ paddingBottom:'1rem', fontWeight:'bold'}}>Desirable pluses</Text>
        <List withPadding sx={{ paddingBottom:'1rem'}}>
            <List.Item>Experienced with multiplayer gameplay systems, network replication, core engine, and Virtual Reality technologies</List.Item>
            <List.Item>Experience in Tools Development</List.Item>
            <List.Item>Unreal Engine experience</List.Item>
            <List.Item>C++ programming</List.Item>
            <List.Item>Experience working with Amazon Gamelift, Google Firebase, or Microsoft Playfab</List.Item>
            <List.Item>Solid technical foundation (e.g. Computer Science / Maths Degree or equivalent)</List.Item>
        </List>

        <Text sx={{ paddingBottom:'1rem', fontWeight:'bold'}}>What you will find working with us</Text>
        <List withPadding sx={{ paddingBottom:'1rem'}}>
            <List.Item>Permanently remote position</List.Item>
            <List.Item>An opportunity to hone and improve your skills by applying them to a diverse variety of engaging projects.</List.Item>
            <List.Item>Be part of an international Group with offices worldwide</List.Item>
            <List.Item>Career growth and development</List.Item>
            <List.Item>Working closely with a team of like-minded people in a fast-paced, multicultural environment</List.Item>
            <List.Item>Ongoing training and professional self-improvement opportunities</List.Item>
            <List.Item>Flexible working hours</List.Item>
            <List.Item>An inclusive culture and open communication</List.Item>
        </List>
        <Text sx={{ paddingBottom:'1rem' }}>
        At Starloop, our passion lies in gaming. Our vision is to create and deliver engaging and interesting games for our clients. 
        We can deliver this high-quality work on any platform, at any scale. Our goal is to deliver enjoyable experiences to our players by 
        pushing the boundaries of the industry. Whether that be through the mechanics we create, stories we tell, or tools that we use. 
        And we know that reputation and results go hand-in-hand. That’s why we look for those who are experts in their field or are driven with a 
        voracious appetite for creativity. All in search of delivering the best results.
        </Text>
        <Text sx={{ paddingBottom:'3rem' }}>
        If you do not meet all the requirements, but believe you’d still be a great fit for the role, don’t worry! We’d still love to hear from you, 
        please get in touch!  
        </Text>
        <Button radius="xl" sx={{ height: 40 }} color="orange">
            APPLY NOW
        </Button>
    </div>
  )
}
