import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      <PostCard title="Sample Post" description="This is a placeholder for a post." />
    </div>
  );
};

export default PostsPage;