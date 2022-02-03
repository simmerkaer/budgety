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
import {
  useLoginMutation,
  useRegisterMutation,
} from "./../graphql/generated/graphql-operations";
import { useRouter } from "next/router";

const Register: NextPage = () => {
  const [email, setEmail] = useState<string>("sim@schultz.dk");
  const [password, setPassword] = useState<string>("password");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [, register] = useRegisterMutation();
  const router = useRouter();

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleSubmit = async () => {
    setIsFetching(true);
    const result = await register({
      email: email,
      password: password,
    });
    if (result.data?.register) {
      router.push("/login");
    }
    setIsFetching(false);
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
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          isLoading={isFetching}
        >
          Register
        </Button>
      </FormControl>
    </Container>
  );
};

export default Register;
