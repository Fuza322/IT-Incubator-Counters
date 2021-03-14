import {StateType} from "../App";

export type IncValueActionType = {
    type: 'INC-VALUE'
}

export type ResetValueActionType = {
    type: 'RESET-VALUE'
}

export type SetSettingsActionType = {
    type: 'SET-SETTINGS'
}

export type ChangeInputValueActionType = {
    type: 'CHANGE-INPUT-VALUE'
}

export type ActionsType = IncValueActionType | ResetValueActionType | SetSettingsActionType | ChangeInputValueActionType

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
                ++state.displayValue
                state.disabledResetButton = false
            }
            if (state.displayValue === state.maxValue) {
                state.disabledIncButton = true
            }
            return {...state}
        }
        case 'RESET-VALUE': {
            state.displayValue = state.startValue
            state.disabledResetButton = true
            state.disabledIncButton = false
            return {...state}
        }
        case 'SET-SETTINGS': {
            state.displayValue = state.startValue
            state.disabledSetButton = true
            state.disabledIncButton = false
            state.disabledResetButton = true
            state.changingSettings = false
            return {...state}
        }
        case 'CHANGE-INPUT-VALUE': {
            state.disabledIncButton = true
            state.disabledResetButton = true
            state.disabledSetButton = false
            state.changingSettings = true
            return {...state}
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

export const changeInputValueAC = (): ChangeInputValueActionType => {
    return {type: 'CHANGE-INPUT-VALUE'}
}