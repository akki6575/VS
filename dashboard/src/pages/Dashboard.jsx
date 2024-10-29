import { useState } from 'react';
import UserCard from '../components/UserCard';
import useFetchUsers from '../hooks/useFetchUsers';

const Dashboard = () => {
  const { users, loading } = useFetchUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'username') return a.username.localeCompare(b.username);
      if (sortOption === 'id') return a.id - b.id;
      return 0;
    });

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          User Dashboard
        </h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
        
        <input
          type="text"
          placeholder="Search by name or username"
          className="w-full md:w-1/2 px-4 py-2 rounded-lg border-2 border-blue-500 focus:outline-none focus:border-blue-600"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border-2 border-green-500 focus:outline-none focus:border-green-600"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
          <option value="id">Id</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
