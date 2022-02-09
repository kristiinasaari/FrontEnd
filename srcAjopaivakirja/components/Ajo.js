
function Ajo (props) {
    return (
        <div>
            Nimi: {props.ajo.laatija} <br />
            Rekisterinumero: {props.ajo.rekisterinro} <br />
            Matka: {props.ajo.alku.lukema} <br />
            
            Tekijä: {props.hlo.nimi} <br />
        </div>
    );
}

export default Ajo;