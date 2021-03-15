import React from 'react';
import s from './Display.module.css';
import {DisplayType, StateType} from '../../App';
import {Button} from '../button/Button';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

export function Display(props: DisplayType) {

    const {maxValue, displayValue, disabledIncButton, disabledResetButton, changingSettings} = useSelector<AppRootStateType, StateType>(state => state.counterState)

    return (
        <div className='wrapper'>
            <div
                className={`${s.displayContainer} ${props.errorNegValue ? s.redErrorTextStyle : changingSettings ? s.changingSettingsTextStyle : displayValue === maxValue ? s.redValue : ''}`}>
                {
                    (props.errorNegValue) ? <div>Incorrect value!</div> : (changingSettings) ?
                        <div>enter values and press 'set'</div> : displayValue
                }
            </div>
            <div className='buttonsContainer'>
                <Button
                    buttonName={'inc'}
                    onClick={props.incValueButtonClick}
                    isDisabled={disabledIncButton}
                />
                <Button
                    buttonName={'reset'}
                    onClick={props.resetValueButtonClick}
                    isDisabled={disabledResetButton}
                />
            </div>
        </div>
    )
}