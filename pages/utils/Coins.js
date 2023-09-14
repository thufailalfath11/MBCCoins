import React from 'react';
import CoinItem from './CoinItem';
import styles from "../../styles/Styles.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Coins = (props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          <p>#</p>
          <p className={styles.coin_name}>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className={styles.hide_mobile}>volume</p>
          <p className={styles.hide_mobile}>Market Cap</p>
        </div>
        {props.coins.map((coin) => (
          <Link href={`/coin/${coin.id}`}>
              <CoinItem coins={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;