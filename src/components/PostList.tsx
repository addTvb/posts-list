import type { PostsResponse } from "@/types/posts";
import { PostCard } from "./PostCard";

interface IProps {
  postsData?: PostsResponse;
  loading: boolean;
}

export const PostList = ({ postsData, loading }: IProps) => {
  if (loading) {
    return (
      <div className="h-[300px] flex items-center justify-center text-lg">
        <div className="w-[70px] h-[70px] border-4 border-white border-t-blue-400 border-b-blue-400 animate-spin rounded-full"></div>
      </div>
    );
  }

  if (postsData?.posts?.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-lg">
        <div className="w-fit border-2 border-amber-300 rounded-[6px] p-[10px]">
          Sorry we dont have any data for this filters 🤷‍♂️
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {postsData?.posts?.map((post) => (
        <PostCard key={`post-${post.id}`} post={post} />
      ))}
    </div>
  );
};
