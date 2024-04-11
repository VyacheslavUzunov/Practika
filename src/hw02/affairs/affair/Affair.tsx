import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'
import {Rating} from "../../../hw05/pages/Rating";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:string) => void
    weight: string
    text: string
    price: string
    stars: number
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]
console.log(props.stars)
    return (

        <div

            id={'hw2-affair-' + props.affair._id}
            className={affairClass}

        >

            <div>{props.weight}</div>
            <div>{props.text}</div>
            <div>{props.price}</div>
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {props.affair.name}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>
            <Rating value={props.stars} ></Rating>
            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={deleteCallback}
            >
                В корзину
            </button>
        </div>
    )
}

export default Affair
