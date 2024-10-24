import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import store from '@src/store/usePostsStore';
import Card from '../postCard';
import './styles.scss';
import { IPost } from '@src/types';
import Pagination from '@src/components/pagination';
import Modal from '@src/components/modal/modal';
import CreatePostForm from '@src/components/createPostForm';

function MainPage(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    store.fetchPosts(store.currentPage);
    store.fetchUsers();
  }, []);

  if (store.loading) return <p>LOADING...</p>;

  return (
    <div className="container">
      <Pagination />
      <button className="create-button" onClick={openModal}>
        create post
      </button>

      {store.posts.map((post: IPost) => (
        <Card key={post.id} post={{ ...post, author: store.users.find((user) => user.id === post.userId)?.name || 'Unknown author' }} />
      ))}

      <Pagination />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreatePostForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default observer(MainPage);
