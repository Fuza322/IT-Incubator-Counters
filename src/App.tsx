import React from 'react';
import './App.css';
import {Display} from './components/display/Display';
import {CounterSettings} from './components/counterSettings/CounterSettings';
import {changeInputValueAC, IncValueAC, ResetValueAC, SetSettingsAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from './state/store';

export type StateType = {
    startValue: number,
    maxValue: number,
    displayValue: number,

    disabledIncButton: boolean,
    disabledResetButton: boolean,
    disabledSetButton: boolean,

    changingSettings: boolean
}

export type CounterSettingsType = {
    startValue: number
    maxValue: number
    disabledIncButton: boolean
    disabledSetButton: boolean
    buttonSetIsDisabled: boolean
    setSettingButtonClick: () => void
    changeInputValue: () => void
}

export type DisplayType = {
    displayValue: number
    maxValue: number
    buttonIncIsDisabled: boolean
    buttonResetIsDisabled: boolean
    changingSettings: boolean
    errorNegValue: boolean
    incValueButtonClick: () => void
    resetValueButtonClick: () => void
}

export type ButtonType = {
    buttonName: string
    onClick: () => void
    isDisabled: boolean
}

function App() {

    const dispatch = useDispatch()
    const counterState = useSelector<AppRootState, StateType>(state => state.counterState)


    let ButtonSetIsDisabled = (counterState.startValue < 0) || (counterState.maxValue <= counterState.startValue) || counterState.disabledSetButton
    let errorNegValue = (counterState.maxValue <= counterState.startValue) || (counterState.startValue < 0)

    function incValue() {
        dispatch(IncValueAC())
    }

    function resetValue() {
        dispatch(ResetValueAC())
    }

    function setSetting() {
        dispatch(SetSettingsAC())
    }

    function changeInputValue() {
        dispatch(changeInputValueAC())
    }

    return (
        <div className='App'>
            <CounterSettings
                startValue={counterState.startValue}
                maxValue={counterState.maxValue}
                disabledIncButton={counterState.disabledIncButton}
                disabledSetButton={counterState.disabledSetButton}
                buttonSetIsDisabled={ButtonSetIsDisabled}
                setSettingButtonClick={setSetting}
                changeInputValue={changeInputValue}
            />
            <Display
                displayValue={counterState.displayValue}
                maxValue={counterState.maxValue}
                buttonIncIsDisabled={counterState.disabledIncButton}
                buttonResetIsDisabled={counterState.disabledResetButton}
                changingSettings={counterState.changingSettings}
                errorNegValue={errorNegValue}
                incValueButtonClick={incValue}
                resetValueButtonClick={resetValue}
            />
        </div>
    );
}

export default App;