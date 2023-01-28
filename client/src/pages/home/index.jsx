import React from "react";
import CardsFromAPI from "../cards";
import CommentClient from "../client-comment";
import GetFreeQoutes from "../getfreeqoutes";
import Hero from "../hero";
import SendMessageAndLocation from "../senMessageAndlocation";

const Home = () => {
  return (
    <div>
      <Hero />
      <CardsFromAPI />
      <GetFreeQoutes />
      <CommentClient />
      <SendMessageAndLocation />
    </div>
  );
};

export default Home;
