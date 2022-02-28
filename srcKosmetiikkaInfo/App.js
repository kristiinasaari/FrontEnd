import React from "react"; 
import Kosmetiikka from "./components/Kosmetiikka"
import Lomake from "./components/Lomake";
import Haku from "./components/Haku";


function App() {
  return (
    <div>

      <div style={ styles.top}>
        <p>Kosmetiikka-Info</p>
        <Haku />
      </div>

      <div style={ styles.cosmetics}>
        <p>Lue arvosteluja tuotteista:</p>
        <Kosmetiikka />
      </div>

      <div style={ styles.rating}>
        <p>Lisää arvostelu tuotteesta:</p>
        <Lomake />
      </div>

      <div style={ styles.bottom}>
      <p>Kosmetiikka-Infon tarkoituksena on kerätä kuluttajien arvostelut kosmetiikka-tuotteista yhteen paikkaan
      <br/>Näin arvostelut eivät ole riippuvaisia verkkokauppojen valikoimasta ja käyttäjät voivat lisätä omia kokemuksia ilman kaupallista sensuuria</p>
      </div>

    </div>
  );
}

export default App;

const styles = {
 top: {
  backgroundColor: 'lightblue',
  color: 'white',
  marginTop: '0.5cm',
  flexDirection: 'row'
  
 },
 cosmetics: {
  backgroundColor: 'lightblue',
  color: 'white',
  marginTop: '0.5cm'
 },
 rating: {
  backgroundColor: 'lightblue',
  color: 'white',
  marginTop: '0.5cm',
  
 },
 bottom: {
  backgroundColor: 'lightblue',
  color: 'white',
  marginTop: '0.5cm'
 },
};