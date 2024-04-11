import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'
import affair from "./affair/Affair";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id:string) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        props.setFilter('Все')
    }
    const setHigh = () => {
        props.setFilter('Кисломолочные')
    }
    const setMiddle = () => {
        props.setFilter('Мясо')
    }
    const setLow = () => {
        props.setFilter('Продукты')
    }

    const cnAll = s.button + ' ' + s.Все + (props.filter === 'Все' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s['Кисломолочные'] + (props.filter === 'Кисломолочные' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.Мясо + (props.filter === 'Мясо' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.Продукты + (props.filter === 'Продукты' ? ' ' + s.active : '')
    const mappedAffairs = props.data.map((a: AffairType) => (

        <Affair
            weight={a.weight}
            price={a.price}
            text={a.text}
            stars={a.stars}
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    Все
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    Кисло-молочные
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Мясо
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Продукты
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
