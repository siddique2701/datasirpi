import React, { useState } from "react";
// import SignUpInfo from "./SignUpInfo";
// import PersonalInfo from "./PersonalInfo";
// import OtherInfo from "./OtherInfo";
import Basic from "./Basic";
import Skills from "./Skills";
import Scores from './Scores';

function Form() {
  const [page, setPage] = useState(0);
   

  const FormTitles = ["Basic", "Skills", "Scores"];

  const PageDisplay = () => {
    if (page === 0) {
      return  <Basic/>;
    } else if (page === 1) {
      return  <Skills/>;
    } else {
      return <Scores/>;
    }
  };

  return (
    <div className="form">
       <div className="form-title">
        <h1 className="form-name">Evalution Wizard</h1>
       </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                 
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;