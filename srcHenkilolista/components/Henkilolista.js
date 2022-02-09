import react from "react";

function Henkilolista(props) {
    if (props.henkilot.length === 0){
        return (<p>Ei listattavaa</p>);
    }
    return (
        <div>
            {
                props.henkilot.map(henkilo => {
                    return (
                        <p key={ henkilo.id }>
                            Nimi: { henkilo.nimi } <br />
                            Alkaa: { henkilo.alkupaiva } <br />
                            Päättyy: {henkilo.loppupaiva} <br />

                        </p>
                    );
                })
            }
        </div>
    );
}

export default Henkilolista;