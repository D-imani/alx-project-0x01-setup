const users = [
  {
    name: "Jane Doe",
    email: "jane@example.com",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "John Smith",
    email: "john@example.com",
    avatarUrl: "https://via.placeholder.com/150",
  },
];

const UsersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="space-y-4">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="bg-white shadow p-4 rounded flex items-center space-x-4"
          >
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;