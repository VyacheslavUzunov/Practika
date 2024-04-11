import React from 'react';

type CataPropsType = {
    weight: string
    text: string
    price: string
}

const Cata = (props: CataPropsType) => {
    return (
        <div>
            <div>
                <img/>
                <span>{props.weight}</span>
                <div>{props.text}</div>
                <span>{props.text}</span>
                <button></button>
            </div>
        </div>
    );
};

export default Cata;