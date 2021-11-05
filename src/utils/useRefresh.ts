import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";
import { useLoginDispatch } from "../globalState";
import { useCookies } from "react-cookie";

const useRefresh = () => {
  const [cookies] = useCookies(["refreshToken"]);
  console.dir(cookies);

  const { data, error } = useSWR<{ data: { accessToken: string } }>(
    "https://codebebop.tk/codebebopServer/auth/refresh",
    (url) => axios.get(url, { withCredentials: true })
  );

  const loginDispatch = useLoginDispatch();

  useEffect(() => {
    const accessToken = data && data.data.accessToken;
    if (accessToken) loginDispatch({ type: "SET_TOKEN", accessToken });
  }, [data, error, loginDispatch]);
};

export default useRefresh;
