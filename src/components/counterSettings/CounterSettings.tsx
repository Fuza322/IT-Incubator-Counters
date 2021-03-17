import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css';
import {CounterSettingsType, StateType} from '../../App';
import {Button} from '../button/Button';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {ChangeMaxValueAC, ChangeStartValueAC} from "../../state/counter-reducer";

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
        <div className='wrapper'>
            <div className={s.counterSettingsField}>
                <div className={s.divSettingsText}>
                    max value:
                </div>
                <div className={s.divSettingsInput}>
                    <input type='number'
                           onChange={onChangeHandlerMaxValue}
                           value={maxValue}
                           className={s.inputCounterSettings}/>
                </div>
                <div className={s.divSettingsText}>
                    start value:
                </div>
                <div className={s.divSettingsInput}>
                    <input type='number'
                           onChange={onChangeHandlerStartValue}
                           value={startValue}
                           className={s.inputCounterSettings}/>
                </div>
            </div>
            <div className='buttonsContainer'>
                <Button
                    buttonName={'set'}
                    onClick={() => props.setSettingButtonClick(maxValue, startValue)}
                    isDisabled={props.buttonSetIsDisabled}
                />
            </div>
        </div>
    )
}