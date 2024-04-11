import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../s1-main/App.module.css'
import { v1 } from 'uuid'
// types
export type AffairPriorityType = 'Кисломолочные' | 'Мясо' | 'Продукты'
export type AffairType = {
    _id: string
    name: string
    priority: AffairPriorityType
    weight: string
    text: string
    price: string
    stars: number
}
export type FilterType = 'Все' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: v1(), name: 'Огурец', priority: 'Продукты', weight:'1500', text:'1', price:'154', stars: 3}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: v1(), name: 'Огурец', priority: 'Продукты', weight:'1500', text:'1', price:'154', stars: 3}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: v1(), name: 'Огурец', priority: 'Продукты', weight:'1500', text:'1', price:'154', stars: 3}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: v1(), name: 'Огурец', priority: 'Продукты', weight:'1500', text:'1', price:'154', stars: 3}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: v1(), name: 'Огурец', priority: 'Продукты', weight:'1500', text:'1', price:'154', stars: 3}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: v1(), name: 'Огурец', priority: 'Продукты', weight:'1500', text:'1', price:'154', stars: 3}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: v1(), name: 'Сосиски Владимирский Стандарт Баварские с сыром газ/уп', priority: 'Мясо', weight:'350г', text:'газ/уп', price:'149.99 ₽/шт', stars: 4},
    {_id: v1(), name: 'Молоко', priority: 'Кисломолочные', weight:'500', text:'1', price:'145', stars: 5},
    {_id: v1(), name: 'Сосиски Папа может Сливочные газ/уп', priority: 'Мясо', weight:'410г ', text:'1', price:'199.99 ₽/шт', stars: 2},
    {_id: v1(), name: 'Сырники', priority: 'Кисломолочные', weight:'450', text:'1', price:'145', stars: 1},
    {_id: v1(), name: 'Сырники', priority: 'Кисломолочные', weight:'450', text:'1', price:'145', stars: 1},
    {_id: v1(), name: 'Сырники', priority: 'Кисломолочные', weight:'450', text:'1', price:'145', stars: 1},
    {_id: v1(), name: 'Сырники', priority: 'Кисломолочные', weight:'450', text:'1', price:'145', stars: 1},
    {_id: v1(), name: 'Сосиски Владимирский Стандарт Баварские с сыром газ/уп', priority: 'Мясо', weight:'350г', text:'газ/уп', price:'149.99 ₽/шт', stars: 4},
    {_id: v1(), name: 'Сосиски Владимирский Стандарт Баварские с сыром газ/уп', priority: 'Мясо', weight:'350г', text:'газ/уп', price:'149.99 ₽/шт', stars: 4},
    {_id: v1(), name: 'Сосиски Владимирский Стандарт Баварские с сыром газ/уп', priority: 'Мясо', weight:'350г', text:'газ/уп', price:'149.99 ₽/шт', stars: 4},
    {_id: v1(), name: 'Сосиски Владимирский Стандарт Баварские с сыром газ/уп', priority: 'Мясо', weight:'350г', text:'газ/уп', price:'149.99 ₽/шт', stars: 4},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'Все') {
        return affairs
    }
    affairs = affairs.filter(item => item.priority === filter)
    return affairs
}

export const deleteAffair = (affairs: Array<AffairType>, _id: string): Array<AffairType> => {
    affairs = affairs.filter(item => item._id !== _id)
    return affairs
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('Все')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: string) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
