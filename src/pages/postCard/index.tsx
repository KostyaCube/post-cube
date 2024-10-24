import { IProps } from '@src/types';
import './styles.scss';
import { Link } from 'react-router-dom';

function Card({ post }: IProps) {
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
          <Link to={`/posts/${post.id}`}>read more</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
