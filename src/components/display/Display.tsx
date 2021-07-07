import React from "react"
import {DisplayType} from "../../App"
import {Button} from "../button/Button"
import style from "./Display.module.css"

export function Display(props: DisplayType) {
    return (
        <div className="wrapper">
            <div className={`${style.displayContainer} ${props.displayValue === props.maxValue ? style.redValue : ""}`}>
                {props.displayValue}
            </div>
            <div className="buttonsContainer">
                <Button
                    buttonName={"inc"}
                    onClick={props.onClickInc}
                    isDisabled={props.displayValue === props.maxValue}
                />
                <Button
                    buttonName={"reset"}
                    onClick={props.onClickReset}
                    isDisabled={props.displayValue === props.startValue}
                />
                <Button
                    buttonName={"set"}
                    onClick={props.onClickSet}
                    isDisabled={false}
                />
            </div>
        </div>
    )
}