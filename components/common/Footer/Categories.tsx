import Link from "next/link";

const Categories = () => {
  return (
    <nav
      className="flex flex-col text-white"
      aria-labelledby="categories-heading"
    >
      <h3 className="text-[28px] mb-10 font-semibold" id="categories-heading">
        Categories
      </h3>
      <div className="text-[26px] flex flex-col gap-3">
        <Link href="/categories/plants">Plants</Link>
        <Link href="/categories/tools">Tools</Link>
        <Link href="/categories/fertilizers">Fertilizers</Link>
        <Link href="/categories/pesticides">Pesticides</Link>
      </div>
    </nav>
  );
};

export default Categories;
