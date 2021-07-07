import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "./state/store"
import {ChangeMaxValueAC, ChangeStartValueAC, IncValueAC, ResetValueAC, SetSettingsAC} from "./state/counter-reducer"
import {Display} from "./components/display/Display"
import {CounterSettings} from "./components/counterSettings/CounterSettings"
import "./App.css"

export type StateType = {
    startValue: number
    maxValue: number
    displayValue: number
    disabledIncButton: boolean
    disabledResetButton: boolean
    disabledSetButton: boolean
    changingSettings: boolean
}

export type CounterSettingsType = {
    buttonSetIsDisabled: boolean
    setSettingButtonClick: (maxValue: number, startValue: number) => void
    changeStartValue: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void
}

export type DisplayType = {
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
    const {startValue, maxValue, disabledSetButton} = useSelector<AppRootStateType, StateType>(state => state.counterState)
    
    let buttonSetIsDisabled = (startValue < 0) || (maxValue <= startValue) || disabledSetButton
    let errorNegValue = (maxValue <= startValue) || (startValue < 0)

    function incValue() {
        dispatch(IncValueAC())
    }

    function resetValue() {
        dispatch(ResetValueAC())
    }

    function setSetting(maxValue: number, startValue: number) {
        dispatch(SetSettingsAC(maxValue, startValue))
    }

    function changeStartValue(startValue: number) {
        dispatch(ChangeStartValueAC(startValue))
    }

    function changeMaxValue(maxValue: number) {
        dispatch(ChangeMaxValueAC(maxValue))
    }

    return (
        <div className="App">
            <CounterSettings
                buttonSetIsDisabled={buttonSetIsDisabled}
                setSettingButtonClick={setSetting}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
            />
            <Display
                errorNegValue={errorNegValue}
                incValueButtonClick={incValue}
                resetValueButtonClick={resetValue}
            />
        </div>
    )
}

export default App