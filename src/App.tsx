import React, {useState} from 'react';
import './App.css';
import {CounterSettings} from './components/counterSettings/CounterSettings';
import {Display} from './components/display/Display';

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

    let [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('start')))
    let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('max')))
    let [displayValue, setDisplayValue] = useState<number>(startValue)
    let [changeSettings, setChangeSettings] = useState<boolean>(true)

    let settingsError = (startValue < 0) || (maxValue <= startValue)

    function incValue() {
        if (displayValue < maxValue) {
            setDisplayValue(++displayValue)
        }
    }

    function resetValue() {
        setDisplayValue(startValue)
    }

    function setSettings() {
        setChangeSettings(!changeSettings)
        setDisplayValue(startValue)

        localStorage.setItem('start', startValue.toString())
        localStorage.setItem('max', maxValue.toString())
    }

    return (
        <div className="App">
            {
                changeSettings
                ? <Display
                    displayValue={displayValue}
                    maxValue={maxValue}
                    startValue={startValue}
                    onClickInc={incValue}
                    onClickReset={resetValue}
                    onClickSet={setSettings}/>
                : <CounterSettings
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    settingsError={settingsError}
                    onClickSet={setSettings}/>
            }
        </div>
    );
}

export default App;
