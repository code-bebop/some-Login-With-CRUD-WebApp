import axios from "axios";
import useSWR from "swr";

const CheckUser = ({ token }: { token: string }) => {
  console.log(token);

  const { data, error } = useSWR(
    token ? "https://codebebop.tk/codebebopServer/auth/check" : null,
    async (url) => {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      return response;
    }
  );

  if (!data) {
    return <p>데이터 없음</p>;
  }

  if (error) {
    return <p>에러 발생</p>;
  }

  console.log(data);

  return <p>데이터 있음</p>;
};

export default CheckUser;
