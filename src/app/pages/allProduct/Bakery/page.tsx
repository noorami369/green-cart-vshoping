"use client";

import instance from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "../UI/page";
import CategoryHeader from "../UI/CategoryHeader";

const BakeryCard = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["BakeryCard "],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  const bakeryProducts =
    data?.products.filter((product) => product.category === "Bakery") ?? [];

  return (
    <>
      <CategoryHeader title="Bakery" products={bakeryProducts} />
    </>
  );
};

export default BakeryCard;
