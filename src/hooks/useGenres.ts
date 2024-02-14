import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isloading };
}

export default useGenres;
