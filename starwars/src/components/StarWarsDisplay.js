import React from 'react'

export default function StarWarsDisplay(props) {
    console.log(props)
    return (
        <div className="ui raised segment display">             
            <div className="row">
                <div className='column'> 
                <h1>{props.name.name}</h1>
                <h4>{props.name.height}cm</h4>
                <h4>{props.name.mass}kg</h4>
                <h4>Skin tone: {props.name.skin_color}</h4>
                <h4>hair color: {props.name.hair_color}</h4>
                <h4>eye color: {props.name.eye_color}</h4>
                <h4>birth year: {props.name.birth_year}</h4>
                </div>
            </div>
        </div>
    )
}
