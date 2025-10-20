import { useState, useEffect } from "react";
import { Add } from "./AddItem";

export const Advantages = () => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    fetch("https://68ed2ae1eff9ad3b1404ca71.mockapi.io/ad")
      .then((res) => res.json())
      .then((data) => setAdds(data));
  }, []);

  console.log(adds);
  return (
    <ul>
      {adds.map((item) => (
        <Add key={item.id} img={item.image} />
      ))}
    </ul>
  );
};
