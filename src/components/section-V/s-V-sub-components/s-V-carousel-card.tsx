import {CardData} from "../../../types/index"

export const SectionVCarouselCard = ({ cardData }: CardData) => {
  return (
    <div className="w-5/12  lg:h-4/6 max-sm:w-8/12 mx-8 trans max-sm:mx-5 relative flex-none snap-center">
      <img
      className="w-full h-full object-cover rounded-2xl"
      src={cardData.image}
      alt="not loaded"
      />

      <div className="text-white absolute bottom-7 px-2">
      <h3 className="font-medium shadow-2xl">{cardData.title}</h3>
      <p className="shadow-2xl">{cardData.discription}</p>
      </div>

    </div>
  );
};
