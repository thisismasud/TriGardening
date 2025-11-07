const SliderBtn = ({ slideNo, active }) => {
  return (
    <button
      className={`cursor-pointer h-4 w-4 rounded-full ${
        active ? "bgOrange" : "bg-white"
      } `}
      aria-label={`Go to slide ${slideNo}`}
      aria-current={active}
      role="tab"
    ></button>
  );
};

export default SliderBtn;
