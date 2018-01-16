export interface Post {
  text: string;
  likes: number;
}

export interface AppState {
  post: Post;
  message: string;
}
