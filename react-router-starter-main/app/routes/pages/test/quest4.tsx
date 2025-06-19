import { useEffect, useState } from 'react';

//1초마다 숫자 증가
const Q4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((currentCount) => {
        return currentCount + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>카운트 : {count}</p>;
};

export default Q4;
