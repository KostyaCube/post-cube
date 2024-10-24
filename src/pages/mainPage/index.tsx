import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import store from '@src/store/usePostsStore';
import Card from '../postCard';
import './styles.scss';
import { IPost } from '@src/types';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

function MainPage(): JSX.Element {
  useEffect(() => {
    store.fetchPosts(store.currentPage);
    store.fetchUsers();
  }, []);

  if (store.loading) return <p>LOADING...</p>;

  return (
    <div className="container">
      <div className="pagination">
        <button onClick={() => store.fetchPosts(store.currentPage - 1)} disabled={store.currentPage === 1}>
          <ArrowLeftOutlined />
          &nbsp; Back
        </button>
        <button onClick={() => store.fetchPosts(store.currentPage + 1)}>
          Next&nbsp; <ArrowRightOutlined />
        </button>
      </div>

      {store.posts.map((post: IPost) => (
        <Card key={post.id} post={{ ...post, author: store.users.find((user) => user.id === post.userId)?.name || 'Unknown author' }} />
      ))}

      <div className="pagination">
        <button onClick={() => store.fetchPosts(store.currentPage - 1)} disabled={store.currentPage === 1}>
          <ArrowLeftOutlined />
          &nbsp; Back
        </button>
        <button onClick={() => store.fetchPosts(store.currentPage + 1)}>
          Next&nbsp; <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
}

export default observer(MainPage);
