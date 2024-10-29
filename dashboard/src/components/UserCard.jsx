import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const UserCard = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-green-700">{user.name}</h3>
      <p className="text-blue-600">@{user.username}</p>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        onClick={() => setShowModal(true)}
      >
        View Details
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-5 bg-grey rounded-lg">
            <h3 className="text-2xl font-bold text-green-700">{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Define prop types
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
