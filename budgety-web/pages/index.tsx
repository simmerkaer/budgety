import { useEffect } from "react";
import { useMeQuery } from "../graphql/generated/graphql-operations";
import { useRouter } from "next/router";
import { useIsAuth } from "./../utils/useIsAuth";

const Home = () => {
  const me = useIsAuth();
  return <div>you are: {me?.email} </div>;
};

export default Home;
