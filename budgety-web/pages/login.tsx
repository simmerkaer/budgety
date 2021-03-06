import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { useLoginMutation } from "./../graphql/generated/graphql-operations";
import { useRouter } from "next/router";
import { setAccessToken } from "../token";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("sim@schultz.dk");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("password");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [, login] = useLoginMutation();
  const router = useRouter();

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleSubmit = async () => {
    setIsFetching(true);
    const result = await login({
      email: email,
      password: password,
    });
    if (result.error) {
      if (result.error.message == "[GraphQL] Could not find user") {
        setEmailError(true);
      }
      if (result.error.message === "[GraphQL] Invalid password") {
        setPasswordError(true);
      }
    }
    if (result.data) {
      router.push("/");
    }
    setIsFetching(false);
  };

  return (
    <Container centerContent>
      <FormControl isInvalid={emailError || passwordError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <FormErrorMessage>User does not exist</FormErrorMessage>}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <FormErrorMessage>Invalid password</FormErrorMessage>}
        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          isLoading={isFetching}
        >
          Login
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;
