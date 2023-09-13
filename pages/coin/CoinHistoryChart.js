import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CoinHistoryChart = () => {
  const [bitcoinPriceData, setBitcoinPriceData] = useState([]);
  const { coinId } = context.query;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins//market_chart', {
          params: {
            vs_currency: 'usd',
            days: 30,
          },
        });

        // Ubah format data sesuai kebutuhan Anda. API CoinGecko memberikan data dalam bentuk [timestamp, harga]
        const bitcoinPriceDataFormatted = response.data.prices.map((priceData) => ({
          timestamp: new Date(priceData[0]).toLocaleDateString(), // Ubah format timestamp sesuai kebutuhan
          price: priceData[1],
        }));

        setBitcoinPriceData(bitcoinPriceDataFormatted);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Histori Harga Bitcoin (30 Hari)</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={bitcoinPriceData}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#007bff" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinHistoryChart;



