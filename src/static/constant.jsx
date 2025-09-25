import books from "../assets/books.jpeg";
import account from "../assets/account.jpeg";
import ptm from "../assets/ptm.jpeg";

export const MENU_ITEMS_LEFT = [
  { id: 1, label: "Home" },
  { id: 2, label: "Features" },
  { id: 3, label: "Services" },
  { id: 4, label: "About" },
  { id: 5, label: "Connect" },
];

export const MENU_ITEMS_RIGHT = [
  { id: 6, label: "Theme" },
  { id: 7, label: "Parent Portal" },
  { id: 8, label: "Sign In" },
];

export const CARDS_DATA = [
  { img: ptm, text: "Parent Portal", color: "#333333" },
  { img: account, text: "Accounts", color: "#3F0713" },
  { img: books, text: "Documents", color: "#1F1D36" },
];
