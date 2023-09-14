import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './coinId.module.css';
import DOMPurify from 'dompurify';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useRouter } from 'next/router';

const Coin = ({ coin }) => {
  const [bitcoinPriceData, setBitcoinPriceData] = useState([]);
  const [timeRange, setTimeRange] = useState('max');
  const router = useRouter();
  const fetchBitcoinPriceData = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: timeRange,
        },
      });

      const bitcoinPriceDataFormatted = response.data.prices.map((priceData) => ({
        timestamp: new Date(priceData[0]).toLocaleDateString(),
        price: priceData[1],
      }));

      setBitcoinPriceData(bitcoinPriceDataFormatted);
    } catch (error) {
      console.error('Error fetching Bitcoin price data:', error);
    }
  };

  useEffect(() => {
    fetchBitcoinPriceData();
  }, [coin.id, timeRange]);
  return (
    <div>
      <div className={styles.coin_container}>
        <div className={styles.content}>
         <h1 className={styles.name}>{coin.name}</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.rank}>
            <span className={styles.rank_btn}>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className={styles.info}>
            <div className={styles.coin_heading}>
              {coin.image ? <img src={coin.image.small} alt='' /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className={styles.coin_price}>
              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>
       <div className={styles.hide_mobile}>
        <div className={styles.content}>
        <div className={styles.timeRangeButtons}>
          <button onClick={() => setTimeRange('1d')}>1 Hari</button>
          <button onClick={() => setTimeRange('7d')}>7 Hari</button>
          <button onClick={() => setTimeRange('30d')}>30 Hari</button>
          <button onClick={() => setTimeRange('90d')}>3 Bulan</button>
          <button onClick={() => setTimeRange('1y')}>1 Tahun</button>
          <button onClick={() => setTimeRange('max')}>Max</button>
        </div>
          <ResponsiveContainer width="100%" height={300} >
            <LineChart data={bitcoinPriceData} >
              <XAxis XAxis dataKey="timestamp" tickFormatter={(tick) => new Date(tick).toLocaleDateString()}  />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#007bff" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.th}>
                <th>1h</th>
                <th className={styles.hide_mobile}>24h</th>
                <th>7d</th>
                <th className={styles.hide_mobile}>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
                <tr className={styles.td}>
                    <td >{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className={styles.hide_mobile}>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td >{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className={styles.hide_mobile}>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td >{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td >{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.content}>
                <div className={styles.stats}>
                    <div className={styles.left}>
                        <div className={styles.row}>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className={styles.row}>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                    </div>
                    <div className={styles.right}>
                        <div className={styles.row}>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                        </div>
                        <div className={styles.row}>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                        </div>

                    </div>
                 </div>
            </div>

        <div className={styles.content}>
          <div className={styles.about}>
            <h3>Tentang {coin.name}</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { coinId } = context.query;
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  try {
    const res = await axios.get(url);
    const coin = res.data;
    return {
      props: {
        coin,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        coin: {},
      },
    };
  }
}

export default Coin;
