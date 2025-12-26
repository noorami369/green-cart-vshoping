import { useQuery } from "@tanstack/react-query";
import CategoryHeader from "./CategoryHeader";
import instance from "@/api/axios";

export type TProducts = {
  category: string;
  createdAt: string;
  description: string[];
  image: string[];
  inStock: boolean;
  name: string;
  offerPrice: number;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type TProductsResponse = {
  success: boolean;
  products: TProducts[];
};

const MainUiPr = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["allProducs"],
    queryFn: async () => {
      const { data } = await instance.get("/api/product/list");
      return data;
    },
  });

  return (
    <>
      <CategoryHeader title="All Products" products={data?.products ?? []} />
    </>
  );
};

export default MainUiPr;
