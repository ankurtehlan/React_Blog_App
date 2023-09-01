import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postimage"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="postimage"
      />
      <div className="postInfo">
        <div>
          <span className="PostCategories">Music</span>
          <span className="PostCategories">Life</span>
        </div>
        <span className="PostTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="PostDate">1 hour ago</span>
      </div>
      <p className="PostCategories">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        asperiores debitis praesentium at possimus? Sunt cum vel, modi, delectus
        magni laborum quia ratione neque culpa in nesciunt assumenda obcaecati
        quae optio animi nihil praesentium! Cum, praesentium. Explicabo, unde,
        tempore sapiente laudantium autem hic minus dolores ullam rerum mollitia
        aliquam sed?
      </p>
    </div>
  );
};

export default Post;
