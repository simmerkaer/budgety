import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../graphql/generated/graphql-operations";

export const useIsAuth = () => {
  const [{ data, error, fetching }] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!fetching && !data?.me) {
      router.replace("/login");
    }
  }, [fetching, data, router]);
  return data?.me;
};
