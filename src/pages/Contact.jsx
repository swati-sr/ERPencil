import React, { useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Form from "../components/Form";
import school from "../assets/school.jpg";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      showAlert({ text: "Message sent successfully!", type: "success" });
      setTimeout(() => hideAlert(), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#ABC4AA] to-[#1c291c] text-[#F3DEBA] px-6 md:px-16 py-12">
      {alert.show && <Alert {...alert} />}

      <div className="max-w-6xl mx-auto text-center md:text-left mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-[#1c291c] max-w-2xl">
          Reach out for demos, onboarding, pricing, or support. Parents can
          include student details for faster assistance.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <img src={school} alt="School" className="rounded-xl shadow-xl" />

          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-200">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Fast support
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Secure data
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Built for schools
            </li>
          </ul>
        </div>
        <Form isLoading={isLoading} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Contact;
