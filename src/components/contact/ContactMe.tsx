import React from "react";

const ContactMe: React.FC = () => {
  return (
    <div className="dark-bg main-content">
      <h2 className="text-[28px] 2xl:text-[28px] text-center 2xl:text-left font-bold text-white">
        Contact Me
      </h2>
      <form
        action="#!"
        className="flex flex-col justify-center items-center gap-5 mt-7 w-full min-w-0 sm:min-w-[350px] max-w-[600px] 2xl:min-w-[700px]"
      >
        <div className="w-full">
          <h6 className="text-[18px] 2xl:text-[20px] text-white font-medium mb-1.5">
            Email Address
          </h6>
          <input
            type="email"
            name="email"
            className="contactInput text-white w-full"
            autoComplete="email"
          />
        </div>
        <div className="w-full">
          <h6 className="text-[18px] 2xl:text-[20px] text-white font-medium mb-1.5">
            Subject
          </h6>
          <input
            type="text"
            name="subject"
            className="contactInput text-white w-full"
            autoComplete="off"
          />
        </div>
        <div className="w-full">
          <h6 className="text-[18px] 2xl:text-[20px] text-white font-medium mb-1.5">
            Message
          </h6>
          <textarea
            name="message"
            className="contactInput resize-none w-full text-white h-[150px]"
            autoComplete="off"
          ></textarea>
        </div>
        <button
          type="submit"
          className="cursor-pointer text-[18px] 2xl:text-[21px] font-family-merriweather text-black font-bold bg-custom-brown border-2 border-solid border-custom-brown rounded-[8px] py-3 px-8 2xl:px-14 w-full 2xl:w-auto transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:border-yellow-600 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
