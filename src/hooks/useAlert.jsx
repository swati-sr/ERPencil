import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "success",
  });

  // Show alert
  const showAlert = ({ text = "", type = "success" }) => {
    setAlert({ show: true, text, type });
  };

  // Hide alert
  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "success" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
