import React from 'react';
import Henkilolista from './components/Henkilolista';

const henkilot = [
  {
  nimi: "Virtanen Matti",
  alkupaiva: "2021-06-01",
  loppupaiva: "2021-06-30",
  },
  {
  nimi: "Laaksonen Lisaa",
  alkupaiva: "2021-06-26",
  loppupaiva: "2021-07-27",
  },
  {
  nimi: "Korhonen Maija",
  alkupaiva: "2021-08-03",
  loppupaiva: "2021-08-30",
  },
 ];

function App() {
  return (
    <div>
      <Henkilolista henkilot={ henkilot } />
    </div>
  );
}

export default App;
