import { useSelector } from "react-redux";

export const SectionI = () => {
  const storeData = useSelector((state: any) => {
  return state.dummy;
  });

  return (
    <div className="w-full h-full sticky z-10 top-0">
      <img
      className="w-full h-full object-cover"
      src={storeData.dummy.sectionI.image}
      alt="not found"
      />

      <div
      className={`absolute w-full h-full bg-${storeData.color} trans top-0 opacity-70`}
      >
      </div>
    </div>
  );
};
