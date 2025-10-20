import React from "react";

const ContactMe: React.FC = () => {
  return (
    <div className="dark-bg pt-5 pb-8 px-9">
      <h2 className="text-[28px] font-bold text-white">Contact Me</h2>
      <form
        action="#!"
        className="flex flex-col justify-center items-center gap-8 mt-11"
      >
        <div>
          <h6 className="text-[20px] text-white font-medium mb-1.5">
            Email Address
          </h6>
          <input type="email" name="email" className="contactInput" />
        </div>
        <div>
          <h6 className="text-[20px] text-white font-medium mb-1.5">Subject</h6>
          <input type="text" name="subject" className="contactInput" />
        </div>
        <div>
          <h6 className="text-[20px] text-white font-medium mb-1.5">Message</h6>
          <textarea
            name="message"
            className="contactInput resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-[21px] font-family-merriweather text-black font-bold bg-custom-brown border-2 border-solid border-custom-brown rounded-[8px] py-3 px-14"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
