import React, { useEffect, useState } from "react";
import "./index.scss";
const CardsFromAPI = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = fetch("http://localhost:3000/cards");
    const data = await (await response).json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const sortBYprice = () => {
    const sorted = data.sort((a, b) => (a.price - b - price ? 1 : -1));
  };

  return (
    <div>
      <div className="cardsfromapi">
        <div className="container">
          <div className="cards">
            {data.map((q) => {
              return (
                <div className="card">
                  <div className="icon">
                    <i class={q.cardImg}></i>
                  </div>
                  <div className="title">
                    <h3>{q.cardTitle}</h3>
                  </div>
                  <div className="desc">
                    <p>{q.cardDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFromAPI;
