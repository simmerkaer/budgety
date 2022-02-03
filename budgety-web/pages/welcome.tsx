import { NextPage } from "next";
import { useMeQuery } from "./../graphql/generated/graphql-operations";

const Welcome: NextPage = () => {
  const [{ data, error, fetching }] = useMeQuery();
  if (error) return <div>{error.message}</div>;
  return <div>user id is {data?.me}</div>;
};

export default Welcome;
