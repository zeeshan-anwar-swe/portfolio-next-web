import { SectionVCarouselCard } from "./s-V-carousel-card";
import { useSelector } from "react-redux";

export const SectionVCarousel = () => {
  const storeData = useSelector((state: any) => {
    return state.dummy.dummy.sectionV;
  });
  
  return (
    <div className="flex lg:w-full lg:h-full max-md:h-4/6 max-sm:h-1/2  no-scrollbar py-6 scroll-smooth overflow-scroll snap-x	snap-mandatory">
      {storeData.map((item: any, index: any) => (
      <SectionVCarouselCard key={index} cardData={item} />
      ))}
    </div>
  );
};
