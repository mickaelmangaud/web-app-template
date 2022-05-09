import { useState } from 'react';
import { useFetch } from '../../hooks';

export const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const isCounterMultipleOf3 = counter % 3 === 0;
  
  const [data] = useFetch({ 
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    condition: isCounterMultipleOf3,
    dependencies: [counter]
  });

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </>
  );
};
