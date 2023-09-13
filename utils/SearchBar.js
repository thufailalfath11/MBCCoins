// SearchBar.js
import React, { useState } from 'react';
import styles from '../styles/Styles.module.css'; // Import file CSS terpisah

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // Fungsi untuk menangani perubahan nilai input pencarian
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Jika input pencarian kosong, panggil fungsi onSearch dengan nilai default (misalnya, '')
    if (e.target.value === '') {
      onSearch('50'); // Ubah ini sesuai dengan nilai default yang Anda inginkan
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Cari koin..."
        value={searchTerm}
        onChange={handleChange} // Menggunakan handleChange untuk mengelola perubahan input
        className={styles.input}
      />
      <button className={styles.button} onClick={handleSearch}>Cari</button>
    </div>
  );
};

export default SearchBar;