"use client";

import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "../UI/page";
import instance from "@/api/axios";
import CategoryHeader from "../UI/CategoryHeader";

const GrainsCard = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["BakeryCard "],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  const grainsProducts =
    data?.products.filter((product) => product.category === "Grains") ?? [];

  return (
    <>
      <CategoryHeader title="Grains" products={grainsProducts} />
    </>
  );
};

export default GrainsCard;
