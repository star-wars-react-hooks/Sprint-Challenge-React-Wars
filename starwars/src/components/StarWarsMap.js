import React, { useState } from "react";
import StarWarsDisplay from './StarWarsDisplay';

export default function StarWarsMap(props) {
    console.log(props.data.results)
    return (
        <div className='wrap'>
            {props.data.results.map((i, index ) => <StarWarsDisplay  name={i} key={index} /> )}
        </div>
    )
}
