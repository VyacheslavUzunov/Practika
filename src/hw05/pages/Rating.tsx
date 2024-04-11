import React, {useState} from 'react'
import avatar from './free-icon-star-1828884.png'

export type RatingValueType = 0|1|2|3|4|5
type RatingPropsType = {
    value: number
}

export function Rating(props:RatingPropsType) {
    // let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected = {props.value > 0} value={1}/>
            <Star selected = {props.value > 1} value={2}/>
            <Star selected = {props.value > 2} value={3}/>
            <Star selected = {props.value > 3} value={4}/>
            <Star selected = {props.value > 4} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
}

function Star(props: StarPropsType) {

    return <span>
        { props.selected ? <img src={avatar} alt={''}/> : ''}
    </span>

}