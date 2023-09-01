import "./SinglePost.css";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";

const SinglePost = () => {
  return (
    <div className="SinglePost">
      <div className="SinglePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="post"
          className="SinglePostImg"
        />
        <h1 className="SinglePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon">
              <FaEdit />
            </i>
            <i className="singlePostIcon">
              <BsTrashFill />
            </i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>ANKUR</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsum
          nulla? Quisquam sed in, nesciunt eum esse eos repudiandae suscipit est
          molestias rerum voluptas, aliquid voluptatem eligendi! Pariatur totam
          nisi distinctio fugiat quae! Dolorem provident rem aliquid odit, sit
          nisi similique, repudiandae ducimus eveniet maxime quasi magni.
          Repudiandae iusto nulla vel cupiditate saepe dolorum ipsam minus
          dolore tenetur doloribus distinctio voluptatum veritatis quos totam
          dolor officia architecto minima, id necessitatibus aliquam accusamus.
          Nobis perferendis esse quisquam, accusamus dignissimos necessitatibus
          minus excepturi doloremque officiis laborum eligendi delectus
          veritatis earum consequuntur libero nisi ullam aliquid quibusdam ex
          natus recusandae ab. Quo, inventore?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
