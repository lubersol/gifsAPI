import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs ({ params }) {
    const {keyword} = params;
    const [gifs, setGifs] = useState([]);
    //funcion q se ejecuta cada vez q se renderiza el componente(componentDidMount) a traves de la keyword pasada por parámetro
    useEffect(function () {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs))
    }, [keyword])
    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}
