"use client";

import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "../UI/page";
import instance from "@/api/axios";
import CategoryHeader from "../UI/CategoryHeader";

const FruitsCard = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["BakeryCard "],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  const fruitsProducts =
    data?.products.filter((product) => product.category === "Fruits") ?? [];

  return (
    <>
      <CategoryHeader title="Fruits" products={fruitsProducts} />
    </>
  );
};

export default FruitsCard;
