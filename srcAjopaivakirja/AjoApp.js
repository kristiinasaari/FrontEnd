import Ajo from "./components/Ajo"

const ajopaivakirja = {
  rekisterinro: "XYZ-123",
  laatija: "Risto Reipas",
  alku: {
   lukema: "32500",
   lahtoaika: "13:30",
   paiva: "2020-01-27",
   paikka: "Ratapihantie 13, Helsinki",
  },
  loppu: {
   lukema: "32510",
   loppuaika: "13:50",
   paiva: "2020-06-27",
   paikka: "Hietakummuntie 1, Helsinki",
  }
  }

const hlo = {
  nimi: "Kristiina Saari",
};

function AjoApp() {
  return (
    <div>
      <Ajo ajo={ ajopaivakirja } />
      <Henkilo henkilo={ hlo } />
    </div>
  );
}

export default AjoApp;
