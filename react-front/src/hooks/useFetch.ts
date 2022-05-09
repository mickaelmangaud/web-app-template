import { useEffect, useState } from 'react';
import axios from 'axios';

interface IUseFectProps {
  url: string;
  dependencies?: any[];
  condition?: boolean;
}

export const useFetch = ({ url, dependencies = [], condition = true }: IUseFectProps) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    if(condition) {
      (async () => {
        const { data } = await axios.get(url);
        setData(data);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, url, condition]);

  return [data]
};