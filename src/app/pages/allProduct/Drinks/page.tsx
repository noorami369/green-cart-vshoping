"use client";

import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "../UI/page";
import instance from "@/api/axios";
import CategoryHeader from "../UI/CategoryHeader";

const DrinksCard = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["BakeryCard "],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  const drinksProducts =
    data?.products.filter((product) => product.category === "Drinks") ?? [];

  return (
    <>
      <CategoryHeader title="Drinks" products={drinksProducts} />
    </>
  );
};

export default DrinksCard;
