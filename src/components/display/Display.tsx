import React from "react"
import {useSelector} from "react-redux"
import {AppRootStateType} from "../../state/store"
import {DisplayType, StateType} from "../../App"
import {Button} from "../button/Button"
import style from "./Display.module.css"

export function Display(props: DisplayType) {

    const {maxValue, startValue, displayValue, changingSettings} = useSelector<AppRootStateType, StateType>(state => state.counterState)

    return (
        <div className="wrapper">
            <div
                className={`${style.displayContainer} ${props.errorNegValue ? style.redErrorTextStyle : changingSettings ? style.changingSettingsTextStyle : displayValue === maxValue ? style.redValue : ""}`}>
                {(props.errorNegValue) ? <div>Incorrect value!</div> : (changingSettings) ?
                    <div>enter values and press 'set'</div> : displayValue}
            </div>
            <div className="buttonsContainer">
                <Button
                    buttonName={"inc"}
                    onClick={props.incValueButtonClick}
                    isDisabled={displayValue >= maxValue}
                />
                <Button
                    buttonName={"reset"}
                    onClick={props.resetValueButtonClick}
                    isDisabled={displayValue === startValue}
                />
            </div>
        </div>
    )
}