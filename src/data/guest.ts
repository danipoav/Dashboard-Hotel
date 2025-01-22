import { v4 as uuidv4 } from "uuid";

interface Guest {
  name: string;
  id: string;
  photo: string;
  order_date: string;
  check_in: string;
  check_out: string;
  room_type: string;
  status: "Pending" | "Confirmed" | "Canceled";
}

export const guest: Guest[] = [
  {
    name: "Christean Balme",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    order_date: "2024-08-08",
    check_in: "2024-11-24",
    check_out: "2024-12-16",
    room_type: "Deluxe A-7",
    status: "Pending",
  },
  {
    name: "Polly Dwelly",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    order_date: "2024-02-25",
    check_in: "2024-11-13",
    check_out: "2024-11-16",
    room_type: "Deluxe A-12",
    status: "Pending",
  },
  {
    name: "Silas Checo",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    order_date: "2023-12-08",
    check_in: "2024-07-11",
    check_out: "2024-07-21",
    room_type: "Deluxe A-2",
    status: "Pending",
  },
  {
    name: "Modesty Gonzalvo",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    order_date: "2024-09-15",
    check_in: "2024-12-09",
    check_out: "2024-12-15",
    room_type: "Deluxe A-87",
    status: "Pending",
  },
  {
    name: "Burty Vannoort",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    order_date: "2024-11-09",
    check_in: "2024-02-19",
    check_out: "2024-02-25",
    room_type: "Deluxe A-87",
    status: "Pending",
  },
  {
    name: "Cordell Sanchez",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    order_date: "2024-01-09",
    check_in: "2024-11-07",
    check_out: "2024-11-15",
    room_type: "Deluxe A-64",
    status: "Pending",
  },
  {
    name: "Bette Trayford",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    order_date: "2024-07-29",
    check_in: "2024-10-11",
    check_out: "2024-10-14",
    room_type: "Deluxe A-88",
    status: "Pending",
  },
  {
    name: "Bren de Keyser",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    order_date: "2024-08-24",
    check_in: "2024-10-17",
    check_out: "2024-10-20",
    room_type: "Deluxe A-72",
    status: "Pending",
  },
  {
    name: "Laurella Barnewall",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    order_date: "2024-03-16",
    check_in: "2024-11-08",
    check_out: "2024-11-12",
    room_type: "Deluxe A-28",
    status: "Pending",
  },
  {
    name: "Elianore Gout",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    order_date: "2024-09-14",
    check_in: "2024-06-04",
    check_out: "2024-06-12",
    room_type: "Deluxe A-61",
    status: "Pending",
  },
  {
    name: "Frederich Korbmaker",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    order_date: "2024-07-29",
    check_in: "2024-04-19",
    check_out: "2024-04-26",
    room_type: "Deluxe A-65",
    status: "Pending",
  },
  {
    name: "Clare Sawell",
    id: uuidv4(),
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    order_date: "2024-09-23",
    check_in: "2024-12-01",
    check_out: "2024-12-08",
    room_type: "Deluxe A-67",
    status: "Pending",
  },
];
