import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css';
import {CounterSettingsType} from '../../App';
import {Button} from '../button/Button';

export function CounterSettings(props: CounterSettingsType) {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
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
                           className={`${s.inputCounterSettings} ${props.settingsError ? s.errorSettingsInput : ''}`}/>
                </div>
                <div className={s.divSettingsText}>
                    start value:
                </div>
                <div className={s.divSettingsInput}>
                    <input type='number'
                           onChange={onChangeHandlerStartValue}
                           value={props.startValue}
                           className={`${s.inputCounterSettings} ${props.settingsError ? s.errorSettingsInput : ''}`}/>
                </div>
            </div>
            <div className='buttonsContainer'>
                <Button
                    buttonName={'set'}
                    onClick={props.onClickSet}
                    isDisabled={props.settingsError}
                />
            </div>
        </div>
    )
}