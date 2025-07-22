import React from "react";
import Button from "./Button";

type PostCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const PostCard = ({ title, description, imageUrl }: PostCardProps) => {
  return (
    <div className="bg-white rounded shadow p-4 max-w-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <div className="mt-4">
        <Button text="Read More" />
      </div>
    </div>
  );
};

export default PostCard;