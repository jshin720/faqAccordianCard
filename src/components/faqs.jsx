import React from "react";
import downArrow from "../images/icon-arrow-down.svg"
import upArrow from "../images/up-arrow.svg"


function faqs() {
  return (
    <div>
      <h1 className="header">FAQS</h1>
      <body>
        <span>
          <h4> How many team members can I invite?</h4>
          <img src={downArrow} alt="arrow" />
          <img src={upArrow} alt="arrow" />
          <p>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </p>
        </span>
        <span>
          <h4>What is the maximum file upload size?</h4>
          <img src={downArrow} alt="arrow" />
          <img src={upArrow} alt="arrow" />
          <p>
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </p>
        </span>
        <span>
          <h4> How do I reset my password?</h4>
          <img src={downArrow} alt="arrow" />
          <p>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </p>
        </span>
        <span>
          <h4>Can I cancel my subscription?</h4>
          <img src={downArrow} alt="arrow" />
          <img src={upArrow} alt="arrow" />
          <p>
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </p>
        </span>
        <span>
          <h4> Do you provide additional support?</h4>
          <img src={downArrow} alt="arrow" />
          <img src={upArrow} alt="arrow" />
          <p>
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </p>
        </span>
      </body>
      <footer>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by
          {/* <a href="#">Your Name Here</a>. */}
        </div>
      </footer>
    </div>
  );
}

export default faqs;
