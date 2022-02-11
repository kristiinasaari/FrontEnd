import React, { useState, useEffect } from "react";

function Tiedot() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');

    const [viesti, setViesti] = useState('');

    const fetchUrl = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
            const json = await response.json();
            setName(json.name);
            setUsername(json.username);
            setCity(json.address.city);
            setViesti('');
        } catch (error) {
            setViesti('Tietoja ei ole saatavilla');
        }
    }

    useEffect ( () => { fetchUrl() }, [] );

    if (viesti.length > 0) {
        return <div>{viesti}</div>
    }

    return (
        <div>
            <div>Nimi: { name }</div> <br/>
            <div>Käyttäjä: { username }</div> <br/>
            <div>Kaupunki: { city }</div> <br/>
        </div>
    );
}

export default Tiedot;