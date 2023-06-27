import { Box, Center, Button, Input, Heading, FormControl, FormLabel, FormErrorMessage, Link } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {LOGIN, DASHBOARD} from "../../lib/routes";
import { useRegister } from "../../hooks/auth";
import {useForm} from "react-hook-form";
import { emailValidate, passwordValidate, usernameValidate } from "../../utils/form-validate";

export default function Register(){
    const {register: signup, isLoading} = useRegister();
    const {register, handleSubmit, formState: { errors },} = useForm();

    async function handleRegister(data) {
        signup({
            username: data.username,
            email: data.email, 
            password: data.password, 
            redirectTo: DASHBOARD,
        });     
    }
    
    return (
    <Center w="100%" h="100vh">
        <Box mx="1" maxW="md" p = "9" borderWidth = "1px" borderRadius = "lg">
            <Heading mb="4" size="lg" textAlign="center">Register Below</Heading>
            
            <form onSubmit={handleSubmit(handleRegister)}>
            <FormControl isInvalid={errors.username} py = "2">
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="Username" 
                    {...register('username', usernameValidate)}/>
                    <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                </FormControl>                
                <FormControl isInvalid={errors.email} py = "2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email address" {...register('email', emailValidate)}/>
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password} py = "2">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" {...register('password', passwordValidate)}/>
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>    
            <Button my="4" type="submit" size="md" colorScheme = "purple" width="full" isLoading={isLoading}>Register</Button>    
            </form>                         

                <Link as={RouterLink} to={LOGIN} color="blue.500" fontWeight="medium" textDecor="underline" _hover={{ background: "purple.100" }}>
                    Already have an account? Log in here.                              
                    </Link>
        </Box>
    </Center>
    );
}
