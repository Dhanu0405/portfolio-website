import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_mail: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_y631h78",
        "template_dpgzxia",
        formData,
        "_1JrIsOGyqojmM49Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
    setFormData({ from_name: "", from_mail: "", message: "" });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] flex justify-center items-center p-4"
    >
      <div className="max-w-4xl w-full bg-[#0a192f] p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-4xl font-bold text-gray-300 border-b-4 border-pink-600 inline-block mb-4">
            Contact
          </p>
          <p className="text-gray-400 mb-6">
            Submit the form below or shoot me an email -{" "}
            <a
              href="mailto:dhanushrajesh.btech23@rvu.edu.in"
              className="text-pink-600 hover:underline"
            >
              dhanushrajesh.btech23@rvu.edu.in
            </a>
          </p>
        </div>
        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              className="bg-[#ccd6f6] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              type="text"
              placeholder="Name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              className="bg-[#ccd6f6] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              type="email"
              placeholder="Email"
              name="from_mail"
              value={formData.from_mail}
              onChange={handleChange}
            />
            <textarea
              className="bg-[#ccd6f6] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="bg-pink-600 text-white border-2 border-pink-600 hover:bg-transparent hover:text-pink-600 px-6 py-3 rounded-md transition duration-300 ease-in-out self-start">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
