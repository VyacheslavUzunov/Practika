import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>

                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => (isActive ? s.active : '')} // делает студент
                    >
                        Каталог
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => (isActive ? s.active : '')} // делает студент
                    >
                        Скидки
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                        className={({isActive}) => (isActive ? s.active : '')} // делает студент
                    >
                        О нас
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-contact'}
                        to={PATH.JUNIOR_LOX}
                        onClick={handleClose}
                        className={({isActive}) => (isActive ? s.active : '')} // делает студент
                    >
                        Контакты
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
