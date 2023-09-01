import "./Home.css";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
