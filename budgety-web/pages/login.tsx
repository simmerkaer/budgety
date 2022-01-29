import {
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { useLoginMutation } from "./../graphql/generated/graphql-operations";

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [test, login] = useLoginMutation();

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleSubmit = async () => {
    console.log("logging in...");
    const result = await login({
      email: email,
      password: password,
    });
    // TODO: Set token in localStorage
    console.log(result.data?.login.accessToken);
  };
  return (
    <Container centerContent>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Button
      </Button>
    </Container>
  );
};

export default Home;
