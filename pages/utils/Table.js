import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coins from './Coins';
import Navbar from './Navbar';
import SearchBar from './SearchBar'; // Import SearchBar

function Table() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=500&page=1&sparkline=false&locale=en';

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (term) => {
    // Fungsi ini akan dipanggil oleh SearchBar dengan kata kunci pencarian
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCoins(filtered);
  };

  return (
    <>
      
      <SearchBar onSearch={handleSearch} /> {/* Gunakan SearchBar di sini */}
      <Coins coins={filteredCoins.length > 0 ? filteredCoins : coins} />
    </>
  );
}

export default Table;