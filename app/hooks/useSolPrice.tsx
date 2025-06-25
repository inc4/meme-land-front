import { useEffect, useState } from "react";
import type { TBinanceSolPrice } from "~/types";

const BINANCE_API_URL = 'https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT';

const useSolPrice = () => {
  const [price, setPrice] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(BINANCE_API_URL);

        if (!response.ok) return;

        const data = await response.json() as TBinanceSolPrice;

        setPrice(data.price);
      } catch (e) {
        console.log(e, 'Get SOL price error');
      }
    })()
  }, []);

  return price;
};

export default useSolPrice;
