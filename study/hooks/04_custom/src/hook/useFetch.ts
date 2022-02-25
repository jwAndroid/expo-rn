import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

interface IData {
  message: string;
  status: string;
}
// 퍼블릭 api 들어가서 json 형태보면 key,type 이 나오는데 똑같이 맞춰서 쓰면된다.
// Hook 이 저장하는것
// url 하나당 IData 하나있는게 정상 근데 이건 하기나름

// useFetch 이름은 use+함수명 적는다

export const useFetch = (url: string) => {
  const [data, setData] = useState<IData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(url);
      console.log(data);

      // 캐스팅 가능
      if ((data as IData).status) {
        setData(data);
      }
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, error, isLoading };
};
