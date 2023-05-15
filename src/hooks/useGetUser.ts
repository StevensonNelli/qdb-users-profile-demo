import React from "react";
import { useQuery } from "react-query";
import apiClient from "../api/http-common";
import { getRandomNum } from "../helpers/util-methods";

export default function useGetUser() {
  const [userDetails, setUserDetails] = React.useState(null);
  const userId = getRandomNum();

  const { isLoading, refetch } = useQuery(
    "user-details",
    async () => {
      return await apiClient.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        return result;
      },
      onError: (err) => {
        return err;
      },
    }
  );

  return { userDetails, isLoading, refetch };
}
