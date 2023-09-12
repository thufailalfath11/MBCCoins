import axios from 'axios';
import styles from "./coinId.module.css"
import DOMPurify from 'dompurify';
const Coin = ({ coin }) => {
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

                <div className={styles.content}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.th}>
                                <th >1h</th>
                                <th className={styles.hide_mobile}>24h</th>
                                <th >7d</th>
                                <th className={styles.hide_mobile}>14d</th>
                                <th >30d</th>
                                <th >1yr</th>
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
                        <h3>About {coin.name}</h3>
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
