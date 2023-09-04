import "./NavBar.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaSearchengin,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const NavBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="NavLeft">
        <AiFillFacebook className="NavIcons" />
        <AiFillTwitterSquare className="NavIcons" />
        <FaInstagramSquare className="NavIcons" />
        <FaPinterestSquare className="NavIcons" />
      </div>
      <div>
        <ul className="NavCenter">
          <li>
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li>
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="NavRight">
        {user ? (
          <FaUserCircle className="NavImg" />
        ) : (
          <ul className="NavCenter">
            <li>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            <BiSearch className="NavSearchIcon" />
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
