import './styles.scss';

function Post() {
  return (
    <div className="container">
      <div className="card details">
        <h3>Post title</h3>
        <img src="https://picsum.photos/1500/1500.jpg" alt="post-image" />
        <div className="content-wrapper">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
