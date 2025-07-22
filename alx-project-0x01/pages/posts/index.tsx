import PostCard from "@/components/common/PostCard";

const posts = [
  {
    title: "Exploring Next.js",
    description: "A beginner-friendly introduction to building apps with Next.js.",
    imageUrl: "https://via.placeholder.com/600x400",
  },
  {
    title: "Tailwind CSS Tips",
    description: "Make your UI stunning with these Tailwind tricks.",
    imageUrl: "https://via.placeholder.com/600x400",
  },
];

const PostsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;