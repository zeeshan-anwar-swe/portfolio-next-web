
import { SectionI } from "@/components/section-I/section-I";
import { SectionII } from "@/components/section-II/section-II";
import { SectionIII } from "@/components/section-III/section-III";
import { SectionIV } from "@/components/section-IV/section-IV";
import { SectionV } from "@/components/section-V/section-V";
import { SectionVI } from "@/components/section-VI/section-VI";
import Header from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import store from "@/redux/store/store";
import { Provider, } from "react-redux";

export default function Home() {

  
  return (
    <Provider store={store}>
      <div className="w-full h-screen lg:flex bg-c-purple  no-scrollbar  overflow-scroll relative">
        <div id="header" className="h-full lg:w-1/2 md:p-16 p-8">
          <Menu />
          <Header />
        </div>
        <div id="menu" className="h-screen lg:h-full no-scrollbar scroll-smooth sticky top-0 overflow-scroll lg:w-1/2">
          <SectionI />
          <SectionII />
          <SectionIII />
          <SectionIV />
          <SectionV />
          <SectionVI />
        </div>
      </div>
    </Provider>
  );
}
