import React, {useState} from 'react';
import './App.css';
import {Display} from './components/display/Display';
import {CounterSettings} from './components/counterSettings/CounterSettings';

export type CounterSettingsType = {
  maxValue: number
  startValue: number
  setMaxValue: (maxValue: number) => void
  setStartValue: (startValue: number) => void
  setSettingButtonClick: () => void
  buttonSetIsDisabled: boolean
  setDisabledSetButton: (disabledSetButton: boolean) => void
  setDisabledIncButton: (disabledIncButton: boolean) => void
  setDisabledResetButton: (disabledResetButton: boolean) => void
  setChangingSettings: (changingSettings: boolean) => void
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

function App() {

  let [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('start')))
  let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('max')))
  let [displayValue, setDisplayValue] = useState<number>(startValue)

  let [disabledSetButton, setDisabledSetButton] = useState<boolean>(true)
  let [disabledIncButton, setDisabledIncButton] = useState<boolean>(false)
  let [disabledResetButton, setDisabledResetButton] = useState<boolean>(true)

  let [changingSettings, setChangingSettings] = useState<boolean>(false)

  let ButtonSetIsDisabled = (startValue < 0) || (maxValue <= startValue) || disabledSetButton
  let errorNegValue = (maxValue <= startValue) || (startValue < 0)

  function incValue() {
    if (displayValue < maxValue) {
      setDisplayValue(++displayValue)
      setDisabledResetButton(false)
    }
    if (displayValue === maxValue) {
      setDisabledIncButton(true)
    }
  }

  function resetValue() {
    setDisplayValue(startValue)
    setDisabledResetButton(true)
    setDisabledIncButton(false)
  }

  function setSetting() {
    setDisplayValue(startValue)
    setDisabledSetButton(true)
    setDisabledIncButton(false)
    setDisabledResetButton(true)
    setChangingSettings(false)

    localStorage.setItem('start', startValue.toString())
    localStorage.setItem('max', maxValue.toString())
  }

  return (
      <div className='App'>
        <CounterSettings
            maxValue={maxValue}
            startValue={startValue}
            setMaxValue={setMaxValue}
            setStartValue={setStartValue}
            setSettingButtonClick={setSetting}
            buttonSetIsDisabled={ButtonSetIsDisabled}
            setDisabledSetButton={setDisabledSetButton}
            setDisabledIncButton={setDisabledIncButton}
            setDisabledResetButton={setDisabledResetButton}
            setChangingSettings={setChangingSettings}
        />
        <Display
            displayValue={displayValue}
            maxValue={maxValue}
            incValueButtonClick={incValue}
            resetValueButtonClick={resetValue}
            buttonIncIsDisabled={disabledIncButton}
            buttonResetIsDisabled={disabledResetButton}
            changingSettings={changingSettings}
            errorNegValue={errorNegValue}
        />
      </div>
  );
}

export default App;