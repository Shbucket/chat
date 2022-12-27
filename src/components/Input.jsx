import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const image = <FontAwesomeIcon icon={faImage} />
const clip = <FontAwesomeIcon icon={faPaperclip} />

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <span>{clip}</span>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file"><span>{image}</span></label>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
