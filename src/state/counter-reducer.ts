import {StateType} from "../App";

export type IncValueActionType = {
    type: 'INC-VALUE'
}

export type ResetValueActionType = {
    type: 'RESET-VALUE'
}

export type SetSettingsActionType = {
    type: 'SET-SETTINGS',
    // startValue: number
}

export type ChangeStartValueActionType = {
    type: 'CHANGE-START-VALUE'
    startValue: number
}

export type ChangeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE'
    maxValue: number
}

export type ActionsType =
    IncValueActionType
    | ResetValueActionType
    | SetSettingsActionType
    | ChangeStartValueActionType
    | ChangeMaxValueActionType

const initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    displayValue: 0,

    disabledIncButton: false,
    disabledResetButton: true,
    disabledSetButton: true,

    changingSettings: false
}

export function counterReducer(state: StateType = initialState, action: ActionsType) {
    switch (action.type) {
        case 'INC-VALUE': {
            if (state.displayValue < state.maxValue) {
                return {
                    ...state,
                    displayValue: ++state.displayValue,
                    disabledResetButton: false
                }
            }
            if (state.displayValue === state.maxValue) {
                return {
                    ...state,
                    disabledIncButton: true
                }
            }
            return state
        }
        case 'RESET-VALUE': {
            return {
                ...state,
                displayValue: state.startValue,
                disabledResetButton: true,
                disabledIncButton: false
            }
        }
        case 'SET-SETTINGS': {
            return {
                ...state,
                displayValue: state.startValue,
                disabledSetButton: true,
                disabledIncButton: false,
                disabledResetButton: true,
                changingSettings: false
            }
        }
        case 'CHANGE-START-VALUE': {
            return {
                ...state,
                startValue: action.startValue,
                disabledIncButton: true,
                disabledResetButton: true,
                disabledSetButton: false,
                changingSettings: true
            }
        }
        case 'CHANGE-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.maxValue,
                disabledIncButton: true,
                disabledResetButton: true,
                disabledSetButton: false,
                changingSettings: true
            }
        }
        default: {
            return state
        }
    }
}

export const IncValueAC = (): IncValueActionType => {
    return {type: 'INC-VALUE'}
}

export const ResetValueAC = (): ResetValueActionType => {
    return {type: 'RESET-VALUE'}
}

export const SetSettingsAC = (): SetSettingsActionType => {
    return {type: 'SET-SETTINGS'}
}

export const ChangeStartValueAC = (startValue: number): ChangeStartValueActionType => {
    return {type: 'CHANGE-START-VALUE', startValue: startValue}
}

export const ChangeMaxValueAC = (maxValue: number): ChangeMaxValueActionType => {
    return {type: 'CHANGE-MAX-VALUE', maxValue: maxValue}
}