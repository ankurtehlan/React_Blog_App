import "./Single.css";
import SideBar from "../../Components/SideBar/SideBar";
import SinglePost from "../../Components/SinglePost/SinglePost";

const Single = () => {
  return (
    <div className="Single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
