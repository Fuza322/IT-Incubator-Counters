import React, {useState} from "react"
import {Display} from "./components/display/Display"
import {CounterSettings} from "./components/counterSettings/CounterSettings"
import "./App.css"

export type ButtonType = {
    buttonName: string
    onClick: () => void
    isDisabled: boolean
}

export type DisplayType = {
    displayValue: number
    maxValue: number
    startValue: number
    onClickInc: () => void
    onClickReset: () => void
    onClickSet: () => void
}

export type CounterSettingsType = {
    maxValue: number
    startValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    settingsError: boolean
    onClickSet: () => void
}

function App() {

    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem("start")))
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem("max")))
    const [displayValue, setDisplayValue] = useState<number>(startValue)
    const [changeSettings, setChangeSettings] = useState<boolean>(true)

    let settingsError = (startValue < 0) || (maxValue <= startValue)

    function incValue() {
        if (displayValue < maxValue) {
            setDisplayValue(displayValue => ++displayValue)
        }
    }

    function resetValue() {
        setDisplayValue(startValue)
    }

    function setSettings() {
        setChangeSettings(!changeSettings)
        setDisplayValue(startValue)

        localStorage.setItem("start", startValue.toString())
        localStorage.setItem("max", maxValue.toString())
    }

    return (
        <div className="App">
            {changeSettings
                ? <Display
                    displayValue={displayValue}
                    maxValue={maxValue}
                    startValue={startValue}
                    onClickInc={incValue}
                    onClickReset={resetValue}
                    onClickSet={setSettings}
                />
                : <CounterSettings
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    settingsError={settingsError}
                    onClickSet={setSettings}
                />}
        </div>
    )
}

export default App
