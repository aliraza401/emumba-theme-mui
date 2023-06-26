import { IUser } from "../components/PaymentsList/PaymentsList.interface";

import FireIcon from "./../assets/images/stats/Color.svg";
import BoxIcon from "./../assets/images/stats/box.svg";
import LightIcon from "./../assets/images/stats/light.svg";
import PinIcon from "./../assets/images/stats/pin.svg";
import SaveIcon from "./../assets/images/stats/save.svg";

export const NAV_WIDTH = 96;

export const avatars = [
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
];

export const users: IUser[] = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Jel Chibuzo",
    designation: "Developer",
    projects: 5,
    finishedProjects: 3,
    totalProfit: 390.99,
    followers: 150,
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "Jane Doe",
    designation: "Designer",
    projects: 7,
    finishedProjects: 4,
    totalProfit: 390.99,
    followers: 200,
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    designation: "Developer",
    projects: 5,
    finishedProjects: 3,
    totalProfit: 390.99,
    followers: 150,
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "Jane Doe",
    designation: "Designer",
    projects: 7,
    finishedProjects: 4,
    totalProfit: 390.99,
    followers: 200,
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    designation: "Developer",
    projects: 5,
    finishedProjects: 3,
    totalProfit: 390.99,
    followers: 150,
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "Jane Doe",
    designation: "Designer",
    projects: 7,
    finishedProjects: 4,
    totalProfit: 390.99,
    followers: 200,
  },
];

export const cards = [
  {
    cardCompany: "Sadapay",
    name: "Henry Richardson",
    number: "4567  ****  ****  4501",
    expDate: "04 / 23",
    key: "450",
    cardColor: "#4339F2",
  },
  {
    cardCompany: "MasterCard",
    name: "John Doe",
    number: "1234  ****  ****  5678",
    expDate: "12 / 25",
    key: "451",
    cardColor: "#FF3A29",
  },
  {
    cardCompany: "Pakpay",
    name: "Jane Smith",
    number: "5678  ****  ****  1234",
    expDate: "07 / 24",
    key: "452",
    cardColor: "#34B53A",
  },
];

export const barChartData = {
  dataKeys: {
    Restless: {
      value: "Restless",
      color: "#5951F4",
    },
    Awake: {
      value: "Awake",
      color: "#FF5243",
    },
    Deep: {
      value: "Deep",
      color: "#FFBA1A",
    },
  },
  data: [
    {
      name: "01",
      Restless: 200,
      Awake: 300,
      Deep: 400,
    },
    {
      name: "02",
      Restless: 450,
      Awake: 300,
      Deep: 200,
    },
    {
      name: "03",
      Restless: 350,
      Awake: 200,
      Deep: 0,
    },
    {
      name: "04",
      Restless: 100,
      Awake: 400,
      Deep: 350,
    },
    {
      name: "05",
      Restless: 200,
      Awake: 150,
      Deep: 300,
    },
    {
      name: "06",
      Restless: 300,
      Awake: 450,
      Deep: 200,
    },
    {
      name: "07",
      Restless: 400,
      Awake: 350,
      Deep: 250,
    },
    {
      name: "08",
      Restless: 150,
      Awake: 300,
      Deep: 400,
    },
    {
      name: "09",
      Restless: 250,
      Awake: 200,
      Deep: 450,
    },
  ],
};

export const statData = [
  {
    name: "Chris Newton",
    tagLine: "Comets are a big source of meteoroids.",
    icon: FireIcon,
    progress: 70,
    color: "#34B53A",
  },
  {
    name: "Blanche Malone",
    tagLine: "Comets are a big source of meteoroids.",
    icon: LightIcon,
    progress: 45,
    color: "#FF3A29",
  },
  {
    name: "Eunice Wilkins",
    tagLine: "Comets are a big source of meteoroids.",
    icon: BoxIcon,
    progress: 80,
    color: "#02A0FC",
  },
  {
    name: "Phillip George",
    tagLine: "Comets are a big source of meteoroids.",
    icon: SaveIcon,
    progress: 60,
    color: "#4339F2",
  },
  {
    name: "Birdie Potter",
    tagLine: "Comets are a big source of meteoroids.",
    icon: PinIcon,
    progress: 90,
    color: "#FFB200",
  },
];
