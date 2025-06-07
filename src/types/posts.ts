export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}
export interface PostsResponse {
  posts: Post[];
  limit: number;
  skip: number;
  total: number;
}
