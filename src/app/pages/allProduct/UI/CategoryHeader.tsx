import ProductCard from "./ProductCard";
import { TProducts } from "./page";

type CategoryHeaderProps = {
  title: string;
  products: TProducts[];
};

const CategoryHeader = ({ title, products }: CategoryHeaderProps) => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="mt-16 flex flex-col">
          <div className="flex flex-col items-end w-max">
            <h1 className="text-2xl font-medium uppercase">{title}</h1>
            <div className="w-16 h-0.5 bg-[#4fbf8b] rounded-full"></div>
          </div>
          {/* Products-Items */}

          {products.map((product) => (
            <ProductCard
              key={product._id}
              itemName={product.itemName}
              category={product.category}
              image={product.image}
              cardProductName={product.name}
              price={product.offerPrice}
              Discount={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
