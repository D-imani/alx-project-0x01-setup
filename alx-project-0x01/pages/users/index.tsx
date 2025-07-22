import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

// Define a props interface
interface UsersPageProps {
  posts: UserProps[];
}

const Users : React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
        <Header />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="space-y-4">
        {posts.map((user, idx) => (
          <UserCard key={idx} {...user}/>
        ))}
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;