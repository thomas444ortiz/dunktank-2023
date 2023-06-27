import React from "react";
import { Box, Center, Button, Input, Heading, FormControl, FormLabel, FormErrorMessage, Link } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {REGISTER, DASHBOARD} from "../../lib/routes";
import { useLogin } from "../../hooks/auth";
import {useForm} from "react-hook-form";
import { emailValidate, passwordValidate} from "../../utils/form-validate";

export default function Login(){
    const {login, isLoading} = useLogin();
    const {register, handleSubmit, reset, formState: { errors },} = useForm();



    async function handleLogin(data){
        const succeeded = await login({email: data.email, password: data.password, redirectTo: DASHBOARD});
        if (succeeded){
        reset();            
        }
    }
    
    return (
    <Center w="100%" h="100vh">
        <Box mx="1" maxW="md" p = "9" borderWidth = "1px" borderRadius = "lg">
            <Heading mb="4" size="lg" textAlign="center">Log In Below</Heading>
            
            <form onSubmit={handleSubmit(handleLogin)}>
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
            <Button my="4" type="submit" size="md" colorScheme = "purple" width="full" isLoading={isLoading}>Log In</Button>    
            </form>                         

                <Link as={RouterLink} to={REGISTER} color="blue.500" fontWeight="medium" textDecor="underline" _hover={{ background: "purple.100" }}>
                    Don't have an account? Register for one here.                              
                    </Link>
   
        </Box>
    </Center>
    );
}
