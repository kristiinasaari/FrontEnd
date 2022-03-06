import * as React from 'react';
import Kortti from "./components/Data";



const data = [
  {
  id: 1, otsikko: 'Assi', paiva: '2021-02-29',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/assi.jpg",
  },
  {
  id: 2, otsikko: 'Myynti', paiva: '2021-03-01',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/myynti.jpg",
  },
  {
  id: 3, otsikko: 'Tiko', paiva: '2021-06-24',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/tiko.jpg",
  },
  {
  id: 4, otsikko: 'Bite', paiva: '2021-05-31',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen1.jpg",
  },
  {
  id: 5, otsikko: 'Muu', paiva: '2021-02-29',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen2.jpg"
  },
  ]

function KorttitiedotApp() {
  return (
      <Kortti tiedot={ data } />
  );
}

export default KorttitiedotApp;

