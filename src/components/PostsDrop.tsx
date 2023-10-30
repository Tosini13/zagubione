import type { Post, StuffType } from "../types";
import PostTile from "./PostTile";

type PostsDropPropsType = {
  posts: Post[];
  type: StuffType;
};

const PostsDrop: React.FC<PostsDropPropsType> = ({ type, posts }) => {
  return (
    <div data-testid="posts_drop" className="w-full overflow-x-auto">
      <div className="flex items-center gap-x-4">
        {posts.map((post) => (
          <div className="my-6" key={post.id}>
            <PostTile post={post} type={type} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsDrop;
