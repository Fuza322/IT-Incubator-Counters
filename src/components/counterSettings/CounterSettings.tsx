import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css';
import {CounterSettingsType} from '../../App';
import {Button} from '../button/Button';

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