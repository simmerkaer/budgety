import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { useLogoutMutation } from "../graphql/generated/graphql-operations";
import { useRouter } from "next/router";
import { useIsAuth } from "./../utils/useIsAuth";

const Logout: NextPage = () => {
  const [, logout] = useLogoutMutation();
  const router = useRouter();
  useIsAuth();
  const handleLogout = async () => {
    const data = await logout();
    if (data) {
      router.replace("/login");
    }
    console.log(data);
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};
export default Logout;
