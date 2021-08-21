import React from "react"
import {ButtonType} from "../../App"
import style from "./Button.module.css"

export function Button(props: ButtonType) {
    return (
        <button
            disabled={props.isDisabled}
            onClick={props.onClick}
            className={style.button}>
            {props.buttonName}
        </button>
    )
}