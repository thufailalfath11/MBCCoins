import React from 'react';
import useAuth from '@/hooks/useAuth'; // Sesuaikan dengan lokasi impor useAuth

const UserProfile = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (user) {
    // Ambil nama pengguna dari alamat email (sebagai contoh, kita hanya mengambil bagian sebelum "@" di alamat email)
    const email = user.email;
    const username = email.split('@')[0];

    return (
      <div className="user-profile">
        <span className="text-white underline"> {username}</span>
        <button onClick={handleLogout} className="ml-4 text-green-500 hover:text-white-900">
          Logout
        </button>
      </div>
    );
  }

  return null;
};

export default UserProfile;