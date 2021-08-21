import React, {ChangeEvent} from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../state/store"
import {ChangeMaxValueAC, ChangeStartValueAC} from "../../state/counter-reducer"
import {CounterSettingsType, StateType} from "../../App"
import {Button} from "../button/Button"
import style from "./CounterSettings.module.css"

export function CounterSettings(props: CounterSettingsType) {

    const dispatch = useDispatch()
    const {startValue, maxValue} = useSelector<AppRootStateType, StateType>(state => state.counterState)

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeMaxValueAC(e.currentTarget.valueAsNumber))
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeStartValueAC(e.currentTarget.valueAsNumber))
    }

    return (
        <div className="wrapper">
            <div className={style.counterSettingsField}>
                <span className={style.divSettingsText}>max value:</span>
                <div className={style.divSettingsInput}>
                    <input
                        type="number"
                        onChange={onChangeHandlerMaxValue}
                        value={maxValue}
                        className={style.inputCounterSettings}/>
                </div>
                <span className={style.divSettingsText}>start value:</span>
                <div className={style.divSettingsInput}>
                    <input
                        type="number"
                        onChange={onChangeHandlerStartValue}
                        value={startValue}
                        className={style.inputCounterSettings}/>
                </div>
            </div>
            <div className="buttonsContainer">
                <Button
                    buttonName={"set"}
                    onClick={() => props.setSettingButtonClick(maxValue, startValue)}
                    isDisabled={props.buttonSetIsDisabled}
                />
            </div>
        </div>
    )
}