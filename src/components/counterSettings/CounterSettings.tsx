import React, {ChangeEvent} from "react"
import {CounterSettingsType} from "../../App"
import {Button} from "../button/Button"
import style from "./CounterSettings.module.css"

export function CounterSettings(props: CounterSettingsType) {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
        props.setDisabledSetButton(false)
        props.setDisabledIncButton(true)
        props.setDisabledResetButton(true)
        props.setChangingSettings(true)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
        props.setDisabledSetButton(false)
        props.setDisabledIncButton(true)
        props.setDisabledResetButton(true)
        props.setChangingSettings(true)
    }

    return (
        <div className="wrapper">
            <div className={style.counterSettingsField}>
                <div className={style.divSettingsText}>
                    max value:
                </div>
                <div className={style.divSettingsInput}>
                    <input type="number"
                           onChange={onChangeHandlerMaxValue}
                           value={props.maxValue}
                           className={style.inputCounterSettings}/>
                </div>
                <div className={style.divSettingsText}>
                    start value:
                </div>
                <div className={style.divSettingsInput}>
                    <input type="number"
                           onChange={onChangeHandlerStartValue}
                           value={props.startValue}
                           className={style.inputCounterSettings}/>
                </div>
            </div>
            <div className="buttonsContainer">
                <Button
                    buttonName={"set"}
                    onClick={props.setSettingButtonClick}
                    isDisabled={props.buttonSetIsDisabled}
                />
            </div>
        </div>
    )
}