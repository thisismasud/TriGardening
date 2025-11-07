import Image from "next/image";

const Category = ({ img, title, subtitle }) => {
  return (
    <div className="bgLightOrange w-fit p-10 max-w-[370px] min-h-[370px] flex flex-col justify-center items-center rounded-xl">
      <div className="bg-white h-20 w-20 p-5 rounded-full">
        <div className="h-full w-full relative">
          <Image src={img} alt={title} layout="fill" objectFit="contain" />
        </div>
      </div>

      <h3 className="primary_text mt-4 text-[27px] font-semibold">{title}</h3>
      <p className="secondary_text text-center text-[22px] font-light">
        {subtitle}
      </p>
    </div>
  );
};

export default Category;
