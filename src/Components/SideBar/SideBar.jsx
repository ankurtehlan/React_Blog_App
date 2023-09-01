import "./SideBar.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaSearchengin,
  FaUserCircle,
} from "react-icons/fa";

import { BiSearch } from "react-icons/bi";
const SideBar = () => {
  return (
    <div className="SideBar">
      {/* About Me */}
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1562803265-740e31582061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          amet fugit cum culpa animi quibusdam repudiandae fugiat a molestias,
          tenetur, earum debitis minus reiciendis repellat repellendus
          distinctio eum eius sapiente!
        </p>
      </div>

      {/* Categories */}
      <div className="sideBarItem">
        <div className="sideBarTitle">CATEGORIES</div>
        <ul className="sideBarList">
          <li className="sideBarListItems">Life</li>
          <li className="sideBarListItems">Music</li>
          <li className="sideBarListItems">Style</li>
          <li className="sideBarListItems">Sport</li>
          <li className="sideBarListItems">Tech</li>
          <li className="sideBarListItems">Cinema</li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <AiFillFacebook className="SideBarIcons" />
          <AiFillTwitterSquare className="SideBarIcons" />
          <FaInstagramSquare className="SideBarIcons" />
          <FaPinterestSquare className="SideBarIcons" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
