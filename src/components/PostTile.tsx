import { twMerge } from "tailwind-merge";
import { Post, StuffType } from "../types";
import { getDBFileSrc } from "../utils";
import { stuffType } from "../constants";
import { MapPinIcon } from "@heroicons/react/20/solid";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
};

type PostTilePropsType = {
  post: Post;
  type: StuffType;
};

const PostTile: React.FC<PostTilePropsType> = ({ post, type }) => {
  return (
    <div
      data-testid="post_tile"
      key={post.id}
      className="rounded-lg flex flex-col relative overflow-hidden shadow-sm cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 min-w-[16rem] aspect-[9/13]"
    >
      <img
        src={getDBFileSrc(type, post.id, post.imgSrc[0])}
        alt={`${post.title} image`}
        className="w-full aspect-square object-cover"
      />
      <div className="p-2 text-sm gap-y-1 h-full flex flex-col grow">
        <p className="font-medium text-base grow">{post.title}</p>
        <div className="flex items-center text-secondary-label gap-x-2">
          <p>{new Date(post.dateTime).toLocaleDateString("pl-PL", options)}</p>
          <div className="w-1 aspect-square rounded-full bg-secondary-label" />
          <p>{post.category}</p>
        </div>
        <p>{post.location}</p>
        <div className="absolute top-4 left-0 flex items-center">
          <div
            className={twMerge(
              "h-[2rem] grid place-content-center w-[2.4rem]",
              type === stuffType.FOUND
                ? "bg-secondary-tab"
                : "bg-primary-variant"
            )}
          >
            <MapPinIcon className="h-6 w-6 text-white" />
          </div>
          <div
            className={twMerge(
              "h-0 w-0 border-[1.0rem] border-l-[0rem] border-r-[0.5rem]",
              type === stuffType.FOUND
                ? "border-secondary-tab"
                : "border-primary-variant",
              "border-r-transparent"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default PostTile;
