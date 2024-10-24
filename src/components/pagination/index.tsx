import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import store from '@src/store/usePostsStore';

function Pagination() {
  return (
    <div className="pagination">
      <button onClick={() => store.fetchPosts(store.currentPage - 1)} disabled={store.currentPage === 1}>
        <ArrowLeftOutlined />
        &nbsp; Back
      </button>
      <button onClick={() => store.fetchPosts(store.currentPage + 1)}>
        Next&nbsp; <ArrowRightOutlined />
      </button>
    </div>
  );
}

export default Pagination;
