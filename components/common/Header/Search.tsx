import { Search } from "lucide-react";
const SearchComp = () => {
  return (
    <div className="buttonStroke py-2 border rounded-full flex-center">
      <input
        type="text"
        placeholder="Search plants, tools"
        className="text-white pl-5 text-[22px] focus:border-none outline-none"
      />
      <Search className="mr-4" />
    </div>
  );
};
export default SearchComp;
