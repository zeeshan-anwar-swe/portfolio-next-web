import { sectionIVList } from "../../../types/index";

export const ListItem = ({ listData }: sectionIVList) => {
  return (
    <li className="w-full trans box2 transform translate-x-0 opacity-100">
      <p className="text-2xl lg:text-3xl lg:leading-[1.8] font-medium mb-8">
      {listData.heading}
      </p>
      <h3 className="font-medium">{listData.aurthor}</h3>
      <h3>{listData.designation}</h3>
    </li>
  );
};
