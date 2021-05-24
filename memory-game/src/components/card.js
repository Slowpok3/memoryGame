import { Component , useState, useEffect } from 'react';

const Card = (props) => {
        return (
            <div>
                <h1> {props.symbol} </h1>
            </div>
        );
}

export default Card;