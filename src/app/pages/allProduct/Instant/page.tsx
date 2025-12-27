"use client";

import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "../UI/page";
import instance from "@/api/axios";
import CategoryHeader from "../UI/CategoryHeader";

const InstantCard = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["BakeryCard "],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  const instantProducts =
    data?.products.filter((product) => product.category === "Instant") ?? [];

  return (
    <>
      <CategoryHeader title="Instant" products={instantProducts} />
    </>
  );
};

export default InstantCard;
