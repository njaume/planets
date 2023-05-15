import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import planets from "../adapters/planets";

const usePlanets = () => {
  // Queries
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["planets"],
    (context) => {
      return planets.getPlanets(context.pageParam);
    },
    {
      getNextPageParam: (data) => {
        if (data?.next) {
          const url = new URL(data?.next);
          const searchParams = url.searchParams;
          const page = searchParams.get("page");
          return Number(page);
        }

        return null;
      },
    }
  );
  const pages = data?.pages;
  const concatenatedArray = useMemo(() => {
    return pages?.reduce((acc, curr: any) => {
      return acc.concat(curr?.results);
    }, []);
  }, [pages]);

  return {
    loading: isFetching || isFetchingNextPage,
    isError,
    error,
    data: concatenatedArray,
    fetchNextPage
  }
};

export default usePlanets;
