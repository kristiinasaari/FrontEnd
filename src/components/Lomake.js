import react, {useState} from 'react';

function Lomake() {

    const [henkilo, setValues] = useState({
        nimi: '',
        paiva: '',
        arvosana: '',
    });

    const [viesti, setViesti] = useState('');
  
    const muuta = (e) => {
        setValues({
            ...henkilo,
            [e.target.name]: e.target.value
        });
        setViesti('');
    };

    const lisaaHenkilo = (e) => {
        e.preventDefault();

        setValues({
            nimi: '',
            paiva: '',
            arvosana: '',
        });

        setViesti('Lisättiin');

        if(henkilo.nimi.length === 0 || henkilo.paiva.length === 0 || henkilo.arvosana.length === 0){
            setViesti('Kaikissa kentissä pitää olla arvot')
        }

    }
  
    return (
        <div>
            <form>
                <label htmlFor='nimi'>Nimi </label>
                <input type= 'text' name='nimi' value={ henkilo.nimi } onChange={ (e) => muuta(e)} /> <br />
        
                <label htmlFor='paiva'>Paiva </label>
                <input type= 'text' name='paiva' value={ henkilo.paiva } onChange={ (e) => muuta(e)} /> <br />

                <label htmlFor='nimi'>Arvosana </label>
                <input type= 'text' name='arvosana' value={ henkilo.arvosana } onChange={ (e) => muuta(e)} /> <br />
        
                <input type='submit' value='Lisää' onClick={ (e) => lisaaHenkilo(e) }/>
            </form>

            <p>{ viesti }</p>
        </div>
    );
  }

export default Lomake;