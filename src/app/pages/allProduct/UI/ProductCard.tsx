type ProductCardProps = {
  itemName: string;
  category: string;
  image: string;
  cardProductName: string;
  price?: number;
  Discount?: number;
};

const ProductCard = ({
  itemName,
  category,
  image,
  cardProductName,
  price,
  Discount,
}: ProductCardProps) => {
  return (
    <div className="border border-gray-500/20 rounded-md bg-white md:px-4 px-3 py-2">
      {/* Image */}
      <div className="group cursor-pointer flex items-center justify-center py-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={image}
          alt={itemName}
        />
      </div>

      {/* Content */}
      <div className="text-gray-500/60 text-sm">
        <p>{category}</p>

        <p className="text-gray-700 font-medium text-lg truncate">
          {cardProductName}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <svg
              key={i}
              className="w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 17"
              fill="#4FBF8B"
            >
              <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" />
            </svg>
          ))}

          <svg
            className="w-3.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 17"
            fill="rgba(79,191,139,0.35)"
          >
            <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" />
          </svg>

          <span className="text-xs ml-1">(4)</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-end justify-between mt-2">
          <div className="flex items-end">
            <p className="md:text-xl text-base font-medium text-[#4fbf8b]">
              ${price}
            </p>
            <p className="text-gray-500/60 md:text-sm text-xs line-through pl-1">
              ${Discount}
            </p>
          </div>

          <button className="flex items-center justify-center gap-1 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded text-[#4fbf8b]">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
