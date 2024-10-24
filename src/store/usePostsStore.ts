import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { IPost, IUser } from '@src/types';

class PostsStore {
    posts: IPost[] = [];
    users: IUser[] = [];
    postDetails: IPost | null = null;
    loading = false;
    error = '';
    currentPage = 1;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchPosts(page = 1) {
        this.loading = true;
        try {
            const response = await axios.get<IPost[]>(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );
            runInAction(() => {
                this.posts = response.data;
                this.currentPage = page;
                this.loading = false;
            });
        } catch (err) {
            runInAction(() => {
                this.error = err instanceof Error ? err.message : `Error: ${err}`;
                this.loading = false;
            });
        }
    }

    async fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            runInAction(() => {
                this.users = response.data;
            });
        } catch (err) {
            console.error('User fetching err:', err);
        }
    }

    async fetchPostDetails(postId: string | undefined, authorId: string | undefined) {
        this.loading = true;
        try {
            const [postRes, userRes] = await Promise.all([
                axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
                axios.get(`https://jsonplaceholder.typicode.com/users/${authorId}`),
            ]);
            runInAction(() => {
                this.postDetails = { ...postRes.data, authorData: userRes.data };
                this.loading = false;
            });
        } catch (err) {
            runInAction(() => {
                this.error = err instanceof Error ? err.message : `Error: ${err}`;
                this.loading = false;
            });
        }
    }

    async addPost(title: string, body: string) {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('body', body);
        formData.append('userId', '1');

        try {
            const response = await axios.post<IPost>(
                'https://jsonplaceholder.typicode.com/posts',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                }
            );
            console.log('Response:', response.data);
        } catch (err) {
            runInAction(() => {
                this.error = err instanceof Error ? err.message : `Error: ${err}`;

            });
        }
    }
}

const store = new PostsStore();
export default store;
