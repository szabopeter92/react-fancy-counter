import { useState, useEffect } from "react";
import ResetButton from "./ResetButton";
import Count from "./Count";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
      const handleKeyDown = (event) => {
        if(event.code === 'Space') {
          const newCount = count + 1;
          if(newCount > 5) {
            setCount(5)
            return;
          }
          setCount(newCount);
        }
      }

      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }, [count]);

  return (
    <div className={`card ${locked ? 'card--limit': ''}`}>
        <Title locked={locked} />
        <Count count={count} />
        <ResetButton setCount={setCount} />
        <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  )
}
