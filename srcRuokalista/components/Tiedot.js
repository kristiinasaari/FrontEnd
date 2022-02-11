import React, { useState, useEffect } from "react";

function Tiedot() {
    const [ruoka, setValues] = useState('');

    const [viesti, setViesti] = useState('');

    const fetchUrl = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
            const json = await response.json();
            setValues(json.meals);
            setViesti('');
        } catch (error) {
            setViesti('Tietoja ei ole saatavilla');
        }
    }

    useEffect ( () => { fetchUrl() }, [] );

    if (viesti.length > 0) {
        return <div>{ viesti }</div>
    }

    return (
        <div>
            <div>{ ruoka }</div>
        </div>
    );
}

export default Tiedot;