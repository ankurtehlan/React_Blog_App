import { FaPlus } from "react-icons/fa";
import "./Write.css";

const Write = () => {
  return (
    <div className="Write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <form className="WriteForm">
        <div className="WriteFormGroup">
          <label htmlFor="fileInput">
            <FaPlus className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="WriteFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
