import React from 'react';
import s from './Display.module.css';
import {DisplayType} from '../../App';
import {Button} from '../Button/Button';

export function Display(props: DisplayType) {

    return (
        <div className='wrapper'>
            <div className={`${s.displayContainer} ${props.displayValue === props.maxValue ? s.redValue : ''}`}>
                {props.displayValue}
            </div>
            <div className='buttonsContainer'>
                <Button
                    buttonName={'inc'}
                    onClick={props.onClickInc}
                    isDisabled={props.displayValue === props.maxValue}
                />
                <Button
                    buttonName={'reset'}
                    onClick={props.onClickReset}
                    isDisabled={props.displayValue === props.startValue}
                />
                <Button
                    buttonName={'set'}
                    onClick={props.onClickSet}
                    isDisabled={false}
                />
            </div>
        </div>
    )
}