import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'

type PropsType = {
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({handleOpen}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const location = useLocation()
    const currentPath = location.pathname

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Каталог'
            : currentPath === PATH.JUNIOR
                ? 'Скидки'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Скидки'
                    : currentPath === PATH.JUNIOR_LOX
                        ? 'Контакты'
                        : 'Error'
    return (
        <>
            <div id={'hw5-header'} className={s.header}>
                <h1>{pageName}</h1>
            </div>
        </>
    )
}
