import { ShoppingCart } from "lucide-react";

const Cart = ({ numberofItems }) => {
  return (
    <button
      aria-label={`Shopping cart with ${numberofItems} items`}
      className="relative w-fit cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded"
    >
      <ShoppingCart size={35} />
      <span className="bgOrange px-1 rounded-full text-[12px] min-h-4 min-w-4 flex-center text-white absolute top-0 -right-1.5">
        {numberofItems}
      </span>
    </button>
  );
};

export default Cart;
