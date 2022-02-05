// node_modules
import { useState } from "react";

interface IRequestProps {
  method: string;
  path?: string;
}

const useFetch = <T>({ method, path }: IRequestProps) => {
  const [response, setResponse] = useState<T>({} as T);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runFetch = async (body?: Object) => {
    setIsLoading(true);

    const ssl =
      process.env.NEXT_PUBLIC_BACK_END_SSL &&
      process.env.NEXT_PUBLIC_BACK_END_SSL == "true"
        ? "https://"
        : "http://";

    const host = process.env.NEXT_PUBLIC_BACK_END_HOST
      ? process.env.NEXT_PUBLIC_BACK_END_HOST
      : "127.0.0.1";

    const port = process.env.NEXT_PUBLIC_BACK_END_PORT
      ? process.env.NEXT_PUBLIC_BACK_END_PORT
      : "8090";

    const url = ssl + host + ":" + port + "/";

    let headers: {
      Accept: string;
      "Content-Type": string;
      Authorization?: string;
    } = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (process.env.NEXT_PUBLIC_BACK_END_ENV != "production") {
      const tokenFromLocalStorage = localStorage.getItem("token");
      if (tokenFromLocalStorage) {
        headers.Authorization = tokenFromLocalStorage;
      }
    }

    let fetchedData;
    let dataJson;

    try {
      fetchedData = await fetch(url + path, {
        method: method.toUpperCase(),
        mode: "cors",
        credentials: "include",
        headers,
        body: body && JSON.stringify(body),
      });

      dataJson = await fetchedData.json();

      if (process.env.NEXT_PUBLIC_BACK_END_ENV != "production") {
        // in production httpOnly and secure Cookie are used to store the token (remember to use a reverse proxy with SSL)
        if (dataJson.token) {
          localStorage.setItem("token", dataJson.token);
        }
      }
    } catch (error) {
      const dataError = { error: error };
      return dataError;
    }

    setResponse(dataJson);

    setIsLoading(false);
  };

  return [response, isLoading, runFetch];
};

export default useFetch;
