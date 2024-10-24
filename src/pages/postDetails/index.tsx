import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from '@src/store/usePostsStore';
import './styles.scss';

function Post() {
  const { id } = useParams();
  const location = useLocation();
  const userId = location.state?.userId;

  useEffect(() => {
    store.fetchPostDetails(id, userId);
  }, [id, store]);

  if (store.loading) return <p>LOADING...</p>;
  if (!store.postDetails) return <p>Post not found.</p>;

  return (
    <div className="container">
      <div className="card details">
        <h3>{store.postDetails.title}</h3>
        <p className="author-info">Author: {store.postDetails.authorData?.name || 'Unknown author'}</p>
        <img src="https://picsum.photos/1500/1500.jpg" alt="post-image" />
        <div className="content-wrapper">
          <p>{store.postDetails.body}</p>
        </div>
      </div>
    </div>
  );
}

export default observer(Post);
