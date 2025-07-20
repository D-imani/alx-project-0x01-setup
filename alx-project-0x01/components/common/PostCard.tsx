import React from "react";

interface PostCardProps {
  title: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PostCard;