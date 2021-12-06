
/**
 * multiple actions in this file
 * this is not a named export
 */


import { LOAD_MARKDOWNS_BASIC, LOAD_MARKDOWNS_CHEAT } from "./types"

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
