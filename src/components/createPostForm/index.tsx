import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import store from '@src/store/usePostsStore';
import './styles.scss';

function CreatePost({ closeModal }: { closeModal: () => void }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await store.addPost(title, body);
    setTitle('');
    setBody('');
    closeModal();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default observer(CreatePost);
