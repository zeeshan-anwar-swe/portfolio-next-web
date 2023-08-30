import { useSelector } from "react-redux";

export const SectionII = () => {

  const storeData = useSelector((state:any) => {
    return state.dummy.dummy.sectionII;
  });

  return (
    <div id="about" className="w-full h-full no-scrollbar overflow-scroll text-c-purple bg-white py-28 md:py-16 md:px-16 px-8 sticky top-0 z-20">
      
      <h1 className="text-2xl md:text-3xl font-medium mb-16">About me</h1>
      <h3 className="text-lg md:text-xl md:pr-28 font-medium mb-16">
      {storeData.heading}
      </h3>
      
      {storeData.subHeading.map((item:any, index:number) => (
      <div key={index}>
      <h4 className="font-medium md:text-lg">{item.title}</h4>
      <p className="mb-12 s2-p  lg:pr-16">{item.discription}</p>
      </div>
      ))}

      <p className="s2-p">{storeData.aurthor}</p>

    </div>
  );
};
