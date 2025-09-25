import React from "react";

const Form = ({ isLoading, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">Full name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">Phone</label>
          <input
            type="text"
            placeholder="Optional"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            Include country code if outside India.
          </p>
        </div>
        <div>
          <label className="block text-sm mb-2">Relation</label>
          <select className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none">
            <option>Parent</option>
            <option>Guardian</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">Child name</label>
          <input
            type="text"
            placeholder="Optional"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Student ID</label>
          <input
            type="text"
            placeholder="Optional"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-2">Subject</label>
        <select className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none">
          <option>General Inquiry</option>
          <option>Pricing</option>
          <option>Support</option>
          <option>Demo Request</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-2">Message</label>
        <textarea
          rows="4"
          placeholder="Share details so we can assist quickly"
          className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none resize-none"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-lg disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
