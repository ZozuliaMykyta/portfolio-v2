import React from "react";

const ContactMe: React.FC = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form action="#!">
        <div>
          <h6>Email Address</h6>
          <input type="email" name="email" />
        </div>
        <div>
          <h6>Subject</h6>
          <input type="text" name="subject" />
        </div>
        <div>
          <h6>Message</h6>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
