import react, {useState} from 'react';

function Lomake() {

    const [arvostelu, setValues] = useState({
        nimi: '',
        kommentti: '',
        arvosana: '',
    });

    const [viesti, setViesti] = useState('');
  
    const muuta = (e) => {
        setValues({
            ...arvostelu,
            [e.target.name]: e.target.value
        });
        setViesti('');
    };

    const lisaaArvostelu = (e) => {
        e.preventDefault();

        setValues({
            nimi: '',
            kommentti: '',
            arvosana: '',
        });

        setViesti('Lisättiin');

        if(arvostelu.nimi.length === 0 || arvostelu.kommentti.length === 0 || arvostelu.arvosana.length === 0){
            setViesti('Kaikissa kentissä pitää olla arvot')
        }

    }
  
    return (
        <div>
            <form>
                <label htmlFor='nimi'>Nimi </label>
                <input type= 'text' name='nimi' value={ arvostelu.nimi } onChange={ (e) => muuta(e)} /> <br />
        
                <label htmlFor='kommentti'>Kommentti </label>
                <input type= 'text' name='kommentti' value={ arvostelu.kommentti } onChange={ (e) => muuta(e)} /> <br />

                <label htmlFor='nimi'>Arvosana </label>
                <input type= 'text' name='arvosana' placeholder="Tähän tulossa tähtiarviointi" value={ arvostelu.arvosana } onChange={ (e) => muuta(e)} /> <br />
        
                <input type='submit' value='Lisää' onClick={ (e) => lisaaArvostelu(e) }/>
            </form>

            <p>{ viesti }</p>
        </div>
    );
  }

export default Lomake;