import { LOAD_MARKDOWNS_BASIC, LOAD_MARKDOWNS_CHEAT, SWITCH_OVERALL_FORM } from "./types"

export const loadMarkdownBasic = (basicList) => {
    return {
        type: LOAD_MARKDOWNS_BASIC,
        basicList
    }
}
export const loadMarkdownCheat = (cheatList) => {
    return {
        type: LOAD_MARKDOWNS_CHEAT,
        cheatList
    }
}

export const switchOverallForm = (overallFormState) => {
    return {
        type: SWITCH_OVERALL_FORM,
        overallFormState
    }
}
