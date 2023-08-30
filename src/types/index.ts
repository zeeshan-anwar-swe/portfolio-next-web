export interface DummyState {
  dummy: any;
  color: string;
  loading: boolean;
  error: string | undefined;
}

export interface Dummy {
  header: any;
  sectionI: any;
  sectionII: any;
  sectionIII: any;
  sectionIV: any;
  sectionV: any;
}

interface Icon {
  icon: string;
  title: string;
  discription: string;
}

interface ListData {
  heading: string;
  aurthor: string;
  designation: string;
}

export interface sectionIVList {
  listData: ListData;
}

export interface ListItemProps {
  icon: Icon;
}

interface Data {
  image: string;
  title: string;
  discription: string;
}

export interface CardData {
  cardData: Data;
}

interface Header {
  headLine: string;
  discription: string;
  twitter: string;
  github: string;
  linkedin: string;
  resume: string;
}

interface SubHeading {
  title: string;
  discription: string;
}

interface SectionII {
  heading: string;
  subHeading: SubHeading[];
  aurthor: string;
}

interface Project {
  logo: string;
  title: string;
  discription: string;
}

interface Testimonial {
  heading: string;
  aurthor: string;
  designation: string;
}

interface Client {
  image: string;
  title: string;
  discription: string;
}

export interface DummyData {
  header: Header;
  sectionI: {
    image: string;
  };
  sectionII: SectionII;
  sectionIII: Project[];
  sectionIV: Testimonial[];
  sectionV: Client[];
}
