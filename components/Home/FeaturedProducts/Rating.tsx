import BlankStar from "@/public/icons/rating_empty.png";
import FillStar from "@/public/icons/rating_fill.png";
import Image from "next/image";

const Rating = ({ value, numberOfReviews }) => {
  const totalStars = 5;
  return (
    <div className="flex gap-1 items-center mt-3">
      {Array.from({ length: totalStars }).map((_, index) => {
        const isFilled = index < value;

        return (
          <Image
            key={index}
            src={isFilled ? FillStar : BlankStar}
            width={31}
            height={31}
            alt={isFilled ? "filled star" : "empty star"}
          />
        );
      })}

      <span className="pl-2 text-[22px] primary_text font-medium">
        ({numberOfReviews})
      </span>
    </div>
  );
};

export default Rating;
