import {StateType} from "../App"

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
        case "INC-VALUE": {
            return {
                ...state,
                displayValue: state.displayValue + 1,
                disabledResetButton: false
            }
        }
        case "RESET-VALUE": {
            return {
                ...state,
                displayValue: state.startValue,
                disabledResetButton: true,
                disabledIncButton: false
            }
        }
        case "SET-SETTINGS": {
            return {
                ...state,
                maxValue: action.maxValue,
                startValue: action.startValue,
                displayValue: action.startValue,
                disabledSetButton: true,
                disabledIncButton: false,
                disabledResetButton: true,
                changingSettings: false
            }
        }
        case "CHANGE-START-VALUE": {
            return {
                ...state,
                startValue: action.startValue,
                disabledIncButton: true,
                disabledResetButton: true,
                disabledSetButton: false,
                changingSettings: true
            }
        }
        case "CHANGE-MAX-VALUE": {
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
    return {type: "INC-VALUE"}
}

export const ResetValueAC = (): ResetValueActionType => {
    return {type: "RESET-VALUE"}
}

export const SetSettingsAC = (maxValue: number, startValue: number): SetSettingsActionType => {
    return {type: "SET-SETTINGS", maxValue: maxValue, startValue: startValue}
}

export const ChangeStartValueAC = (startValue: number): ChangeStartValueActionType => {
    return {type: "CHANGE-START-VALUE", startValue: startValue}
}

export const ChangeMaxValueAC = (maxValue: number): ChangeMaxValueActionType => {
    return {type: "CHANGE-MAX-VALUE", maxValue: maxValue}
}

export type IncValueActionType = {
    type: "INC-VALUE"
}
export type ResetValueActionType = {
    type: "RESET-VALUE"
}
export type SetSettingsActionType = {
    type: "SET-SETTINGS"
    maxValue: number
    startValue: number
}
export type ChangeStartValueActionType = {
    type: "CHANGE-START-VALUE"
    startValue: number
}
export type ChangeMaxValueActionType = {
    type: "CHANGE-MAX-VALUE"
    maxValue: number
}

export type ActionsType =
    IncValueActionType
    | ResetValueActionType
    | SetSettingsActionType
    | ChangeStartValueActionType
    | ChangeMaxValueActionType
