import React, {useReducer, useState} from 'react';
import './App.css';
import {Display} from './components/display/Display';
import {CounterSettings} from './components/counterSettings/CounterSettings';
import {counterReducer, IncValueAC, ResetValueAC, SetSettingsAC} from "./state/counter-reducer";

export type CounterSettingsType = {
    maxValue: number
    startValue: number
    setSettingButtonClick: () => void
    buttonSetIsDisabled: boolean
}

export type DisplayType = {
    displayValue: number
    maxValue: number
    incValueButtonClick: () => void
    resetValueButtonClick: () => void
    buttonIncIsDisabled: boolean
    buttonResetIsDisabled: boolean
    changingSettings: boolean
    errorNegValue: boolean
}

export type ButtonType = {
    buttonName: string
    onClick: () => void
    isDisabled: boolean
}

export type StateType = {
    startValue: number,
    maxValue: number,
    displayValue: number,

    disabledSetButton: boolean,
    disabledIncButton: boolean,
    disabledResetButton: boolean,

    changingSettings: boolean
}

function App() {

    let [state, dispatchToState] = useReducer(counterReducer, {
        startValue: 0,
        maxValue: 5,
        displayValue: 0,

        disabledSetButton: true,
        disabledIncButton: false,
        disabledResetButton: true,

        changingSettings: false
    })



    let ButtonSetIsDisabled = (state.startValue < 0) || (state.maxValue <= state.startValue) || state.disabledSetButton
    let errorNegValue = (state.maxValue <= state.startValue) || (state.startValue < 0)

    function incValue() {
        dispatchToState(IncValueAC())
    }

    function resetValue() {
        dispatchToState(ResetValueAC())
    }

    function setSetting() {
        dispatchToState(SetSettingsAC())
    }

    return (
        <div className='App'>
            <CounterSettings
                maxValue={state.maxValue}
                startValue={state.startValue}
                setSettingButtonClick={setSetting}
                buttonSetIsDisabled={ButtonSetIsDisabled}
            />
            <Display
                displayValue={state.displayValue}
                maxValue={state.maxValue}
                incValueButtonClick={incValue}
                resetValueButtonClick={resetValue}
                buttonIncIsDisabled={state.disabledIncButton}
                buttonResetIsDisabled={state.disabledResetButton}
                changingSettings={state.changingSettings}
                errorNegValue={errorNegValue}
            />
        </div>
    );
}

export default App;