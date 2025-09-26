import books from "../assets/books.jpeg";
import account from "../assets/account.jpeg";
import ptm from "../assets/ptm.jpeg";

export const MENU_ITEMS_LEFT = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Features", path: "/features" },
  { id: 3, label: "Services", path: "/services" },
  { id: 4, label: "About", path: "/about" },
  { id: 5, label: "Connect", path: "/contact" },
];

export const MENU_ITEMS_RIGHT = [
  { id: 6, label: "Theme", path: "/theme" },
  { id: 7, label: "Parent Portal", path: "/parent-portal" },
  { id: 8, label: "Sign In", path: "/auth" },
];

export const CARDS_DATA = [
  { img: account, text: "Accounts", color: "#3F0713", path: "/accounts" },
  { img: ptm, text: "Parent Portal", color: "#333333", path: "/parent-portal" },
  { img: books, text: "Documents", color: "#1F1D36", path: "/documents" },
];

export const FOOTER_DATA = {
  contact: [
    { label: "Email", value: "info@yoursite.com" },
    { label: "Phone", value: "+91-8827258409" },
  ],
  socialLinks: [
    { name: "Instagram", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "NGO", url: "#" },
    { name: "Social Accounts", url: "#" },
    { name: "Telegram", url: "#" },
  ],
  bottomText: "Let's Connect",
};
