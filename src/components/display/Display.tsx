import React from 'react';
import s from './Display.module.css';
import {DisplayType} from '../../App';
import {Button} from '../button/Button';

export function Display(props: DisplayType) {

    return (
        <div className='wrapper'>
            <div
                className={`${s.displayContainer} ${props.errorNegValue ? s.redErrorTextStyle : props.changingSettings ? s.changingSettingsTextStyle : props.displayValue === props.maxValue ? s.redValue : ''}`}>
                {
                    (props.errorNegValue) ? <div>Incorrect value!</div> : (props.changingSettings) ?
                        <div>enter values and press 'set'</div> : props.displayValue
                }
            </div>
            <div className='buttonsContainer'>
                <Button
                    buttonName={'inc'}
                    onClick={props.incValueButtonClick}
                    isDisabled={props.buttonIncIsDisabled}
                />
                <Button
                    buttonName={'reset'}
                    onClick={props.resetValueButtonClick}
                    isDisabled={props.buttonResetIsDisabled}
                />
            </div>
        </div>
    )
}