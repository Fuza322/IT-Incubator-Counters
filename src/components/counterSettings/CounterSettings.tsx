import React, {ChangeEvent} from "react"
import {CounterSettingsType} from "../../App"
import {Button} from "../button/Button"
import style from "./CounterSettings.module.css"

export function CounterSettings(props: CounterSettingsType) {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
    }

    return (
        <div className="wrapper">
            <div className={style.counterSettingsField}>
                <span className={style.divSettingsText}>max value:</span>
                <div className={style.divSettingsInput}>
                    <input
                        type="number"
                        value={props.maxValue}
                        onChange={onChangeHandlerMaxValue}
                        className={`${style.inputCounterSettings} ${props.settingsError ? style.errorSettingsInput : ""}`}
                    />
                </div>
                <div className={style.divSettingsText}>
                    start value:
                </div>
                <div className={style.divSettingsInput}>
                    <input
                        type="number"
                        value={props.startValue}
                        onChange={onChangeHandlerStartValue}
                        className={`${style.inputCounterSettings} ${props.settingsError ? style.errorSettingsInput : ""}`}
                    />
                </div>
            </div>
            <div className="buttonsContainer">
                <Button
                    buttonName={"set"}
                    onClick={props.onClickSet}
                    isDisabled={props.settingsError}
                />
            </div>
        </div>
    )
}