import { Box, Text, Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Navbar from "../dashboard/navbar";

export default function Homepage() {
  return (
    <Box>
        <Navbar />        
        {/* Bubble Box */}
        <Box bg="gray.100" width="90%" mx="auto" mt={4} p={8} borderRadius="lg">
            {/* About DunkTank */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
            About DunkTank
            </Text>
            <Text>
                DunkTank Social is a social media app where you post anonomously to a forum, and users can try to "Dunk" you, 
                by clicking on the Softball icon, which has a 1/5 chance of showing your username to everyone. Click on the navbar above 
                to login or register.
            </Text>
            <Text mt="4">
                DunkTank is my CS50 Final Project, and my first real coding project. Please enjoy!
            </Text>
        </Box>

        {/* Two Side-by-Side Bubble Boxes */}
        <Flex mt={4} width="90%" mx="auto">
            <Box flex={1} bg="gray.200" p={8} borderRadius="lg" mr={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
                How I Built This Web App
            </Text>
            <Text>
                Where I Got The Idea: Peter came up with it
            </Text>           
            <Text mt="4">
                My Stack: Chakra UI, React, Firebase
            </Text>  
            <Text mt="2">
                I started with this {" "}
                <Link
                    href="https://www.youtube.com/watch?v=ELyjd5OXZKI"
                    color="blue.500"
                    fontWeight="medium"
                    textDecor="underline"
                    _hover={{ background: "purple.100" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                     tutorial,
                </Link>
                {" "} as a base for my app.
            </Text>
            <Text mt="4">
                From there, I just winged it to make it my own. Here are the original features I built in:    
                <UnorderedList>
                    <ListItem>Made posts anonomous by default.</ListItem>
                    <ListItem>Built in functionality to dunk someone, to expose the username on their anonomous post.</ListItem>   
                    <ListItem>Built in a number of balls (attempts at dunking others) for each account, and added a button to get more (would eventually on be paid), as well as a feature to make sure you have enough balls to dunk someone.</ListItem>   
                    <ListItem>Disable links to user profile page on anonymous posts, and only show exposed posts when you click on a user profile through the all users page.</ListItem>       
                    <ListItem>Customized the UI including some disclaimers, adding an about page and a navbar.</ListItem>   
                </UnorderedList>    
            </Text>   

            </Box>
            <Box flex={1} bg="gray.200" p={8} borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center" >
                What I Will Do Next (if I want to build this for real)
            </Text>
            <Text>
            <UnorderedList>
                    <ListItem>Make the UI better (its really bad on mobile especially)</ListItem>                      
                    <ListItem>Require email (and possibly phone number or other) authentication</ListItem>
                    <ListItem>Creat some sort of content moderation functionality for posts (its the wild west right now)
                    , as well as the ability to report posts and ban users</ListItem>
                    <ListItem>Add in comments on the posts</ListItem>   
                    <ListItem>Make a sharing feature to increase virality</ListItem>    
                    <ListItem>Make it so that there is more than one feed (either friend networks, location based, or chatroom style) </ListItem>           
                    <ListItem>Add in functionality to delete your account</ListItem>
                    <ListItem>Incorporate and monetize</ListItem>
                    <ListItem>Anything else? I am open to suggestions.</ListItem>
                </UnorderedList>  
            </Text>
        </Box>
      </Flex>
    </Box>
  );
}
