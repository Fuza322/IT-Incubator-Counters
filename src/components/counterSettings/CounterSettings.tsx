import React, {ChangeEvent, useState} from 'react';
import s from './CounterSettings.module.css';
import {CounterSettingsType} from '../../App';
import {Button} from '../button/Button';

export function CounterSettings(props: CounterSettingsType) {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    let [disabledSetButton, setDisabledSetButton] = useState<boolean>(true)
    let [disabledIncButton, setDisabledIncButton] = useState<boolean>(false)
    let [disabledResetButton, setDisabledResetButton] = useState<boolean>(true)

    let [changingSettings, setChangingSettings] = useState<boolean>(false)

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        setDisabledSetButton(false)
        setDisabledIncButton(true)
        setDisabledResetButton(true)
        setChangingSettings(true)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        setDisabledSetButton(false)
        setDisabledIncButton(true)
        setDisabledResetButton(true)
        setChangingSettings(true)
    }

    return (
        <div className='wrapper'>
            <div className={s.counterSettingsField}>
                <div className={s.divSettingsText}>
                    max value:
                </div>
                <div className={s.divSettingsInput}>
                    <input type='number'
                           onChange={onChangeHandlerMaxValue}
                           value={props.maxValue}
                           className={s.inputCounterSettings}/>
                </div>
                <div className={s.divSettingsText}>
                    start value:
                </div>
                <div className={s.divSettingsInput}>
                    <input type='number'
                           onChange={onChangeHandlerStartValue}
                           value={props.startValue}
                           className={s.inputCounterSettings}/>
                </div>
            </div>
            <div className='buttonsContainer'>
                <Button
                    buttonName={'set'}
                    onClick={props.setSettingButtonClick}
                    isDisabled={props.buttonSetIsDisabled}
                />
            </div>
        </div>
    )
}