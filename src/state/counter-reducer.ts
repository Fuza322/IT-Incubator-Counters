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

export type ActionsType = IncValueActionType | ResetValueActionType | SetSettingsActionType


export function counterReducer(state: StateType, action: ActionsType) {
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