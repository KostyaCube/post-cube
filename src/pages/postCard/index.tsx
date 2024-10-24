import { IProps } from '@src/types';
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

function Card({ post }: IProps) {
  const navigate = useNavigate();

  return (
    <div className="card list">
      <img src="https://picsum.photos/1500/1500.jpg" alt="post-image" />
      <div className="content-wrapper">
        <h3>{post.title}</h3>
        <p className="short-desc">
          {/* content overflow test ( ﾉ ﾟｰﾟ)ﾉ */}
          {post.body}
          {post.body}
        </p>
        <div className="link-wrapper">
          <p>Author: {post.author}</p>
          <button onClick={() => navigate(`/posts/${post.id}`, { state: { userId: post.userId } })}>
            read more <ArrowRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
