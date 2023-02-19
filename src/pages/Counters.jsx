import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Counter from "../Components/Counter";

const countersData = [
  { id: 1, count: 0, step: 1 },
  { id: 2, count: 0, step: 2 },
  { id: 3, count: 0, step: 3 },
];
const Counters = () => {
  const [counters, setCounters] = useState(countersData);
  const [total, setTotal] = useState(0);

  const increment = (id = 1, step = 1) => {
    setCounters(
      counters.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + step };
        } else {
          return item;
        }
      })
    );
  };
  const decrement = (id = 1, step = 1) => {
    setCounters(
      counters.map((item) => {
        if (item.id === id && item.count >= step) {
          return { ...item, count: item.count - step };
        } else {
          return item;
        }
      })
    );
  };
  useEffect(() => {
    setTotal(counters.reduce((acc, cur) => acc + cur.count, 0));
  }, [counters]);

  return (
    <Container>
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            {...counter}
            increment={() => increment(counter.id, counter.step)}
            decrement={() => decrement(counter.id, counter.step)}
          />
        ))}

        <div className="total">Total : {total}</div>
      </div>
    </Container>
  );
};

export default Counters;
