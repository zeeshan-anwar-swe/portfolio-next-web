import { ListItem } from "./s-III-sub-components/li";
import { useSelector } from "react-redux";

export const SectionIII = () => {
  const storeData = useSelector((state: any) => {
  return state.dummy.dummy.sectionIII;
  });

  return (
    <ul
    id="clients"
    className="w-full h-full   bg-gray-100 flex flex-wrap sticky top-0 z-20"
    >
      {storeData.map((item: any, index: any) => (
      <ListItem key={index} icon={item} />
      ))}
    </ul>
  );
};
