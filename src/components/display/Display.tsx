import React from "react"
import {DisplayType} from "../../App"
import {Button} from "../button/Button"
import style from "./Display.module.css"

export function Display(props: DisplayType) {

    return (
        <div className="wrapper">
            <div
                className={`${style.displayContainer} ${props.errorNegValue ? style.redErrorTextStyle : props.changingSettings ? style.changingSettingsTextStyle : props.displayValue === props.maxValue ? style.redValue : ""}`}>
                {(props.errorNegValue) ? <div>Incorrect value!</div> : (props.changingSettings) ?
                        <div>enter values and press 'set'</div> : props.displayValue}
            </div>
            <div className="buttonsContainer">
                <Button
                    buttonName={"inc"}
                    onClick={props.incValueButtonClick}
                    isDisabled={props.buttonIncIsDisabled}
                />
                <Button
                    buttonName={"reset"}
                    onClick={props.resetValueButtonClick}
                    isDisabled={props.buttonResetIsDisabled}
                />
            </div>
        </div>
    )
}