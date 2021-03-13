import React from 'react';
import s from './Button.module.css';
import {ButtonType} from '../../App';


export function Button(props: ButtonType) {
    return (
        <button disabled={props.isDisabled} onClick={props.onClick} className={s.button}>
            {props.buttonName}
        </button>
    )
}