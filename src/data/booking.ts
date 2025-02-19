import { v4 as uuidv4 } from "uuid";

interface Booking {
  id: string;
  name: string;
  photo: string;
  check_in: string;
  check_out: string;
  room: number;
  price: number;
  status: "Paid" | "Pending" | "Refunded";
  requests: string;
  booking_date: string;
}

export const booking: Booking[] = [
  {
    id: uuidv4(),
    name: "John",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    check_in: "2024-12-21",
    check_out: "2024-12-25",
    room: 101,
    price: 480,
    status: "Paid",
    requests: "Extra pillows",
    booking_date: "2024-12-15",
  },
  {
    id: uuidv4(),
    name: "Sarah",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    check_in: "2024-12-22",
    check_out: "2024-12-26",
    room: 102,
    price: 600,
    status: "Pending",
    requests: "No dairy",
    booking_date: "2024-12-16",
  },
  {
    id: uuidv4(),
    name: "Alex",
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
    check_in: "2024-12-23",
    check_out: "2024-12-27",
    room: 103,
    price: 440,
    status: "Refunded",
    requests: "Near elevator",
    booking_date: "2024-12-17",
  },
  {
    id: uuidv4(),
    name: "Emma",
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
    check_in: "2024-12-24",
    check_out: "2024-12-28",
    room: 104,
    price: 520,
    status: "Paid",
    requests: "Late check-in",
    booking_date: "2024-12-18",
  },
  {
    id: uuidv4(),
    name: "Michael",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    check_in: "2024-12-25",
    check_out: "2024-12-29",
    room: 105,
    price: 560,
    status: "Pending",
    requests: "Extra towels",
    booking_date: "2024-12-19",
  },
  {
    id: uuidv4(),
    name: "Liam",
    photo: "https://randomuser.me/api/portraits/men/16.jpg",
    check_in: "2024-12-20",
    check_out: "2024-12-23",
    room: 106,
    price: 300,
    status: "Paid",
    requests: "Ocean view",
    booking_date: "2024-12-14",
  },
  {
    id: uuidv4(),
    name: "Olivia",
    photo: "https://randomuser.me/api/portraits/women/17.jpg",
    check_in: "2024-12-26",
    check_out: "2024-12-30",
    room: 107,
    price: 500,
    status: "Pending",
    requests: "Allergic to nuts",
    booking_date: "2024-12-20",
  },
  {
    id: uuidv4(),
    name: "Ethan",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    check_in: "2024-12-22",
    check_out: "2024-12-24",
    room: 108,
    price: 180,
    status: "Refunded",
    requests: "Ground floor",
    booking_date: "2024-12-12",
  },
  {
    id: uuidv4(),
    name: "Sophia",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    check_in: "2024-12-27",
    check_out: "2024-12-31",
    room: 109,
    price: 600,
    status: "Paid",
    requests: "King-size bed",
    booking_date: "2024-12-21",
  },
  {
    id: uuidv4(),
    name: "James",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
    check_in: "2024-12-28",
    check_out: "2025-01-01",
    room: 110,
    price: 640,
    status: "Pending",
    requests: "Early check-in",
    booking_date: "2024-12-22",
  },
];
