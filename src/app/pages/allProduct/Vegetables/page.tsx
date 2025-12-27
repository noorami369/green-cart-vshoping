"use client";

import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "../UI/page";
import instance from "@/api/axios";
import CategoryHeader from "../UI/CategoryHeader";

const VegetablesCard = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["BakeryCard "],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  const dairyProducts =
    data?.products.filter((product) => product.category === "Vegetables") ?? [];

  return (
    <>
      <CategoryHeader title="Vegetables" products={dairyProducts} />
    </>
  );
};

export default VegetablesCard;
