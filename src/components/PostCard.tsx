import { memo } from "react";
import type { Post } from "../types/posts";

interface IProps {
  post: Post;
}

export const PostCard = memo(({ post }: IProps) => {
  const totalReactions = post.reactions.likes + post.reactions.dislikes;
  const rationLikes = (post.reactions.likes / totalReactions).toFixed(1);
  const tags = post.tags.join(", ");

  return (
    <div className="p-[10px] rounded-[6px] border border-black flex flex-col justify-between gap-[12px]">
      <h2 className="text-xl">{post.title}</h2>

      <p className="line-clamp-2 text-sm">{post.body}</p>

      <div className="flex flex-col gap-[4px] text-sm">
        <div>
          Total Reactions: <strong>{totalReactions} ❤️</strong>
        </div>
        <div>
          Ration Likes: <strong>{rationLikes} 👍</strong>
        </div>
        <div>
          Tags: <strong className="capitalize">{tags}</strong>
        </div>
      </div>
    </div>
  );
});
