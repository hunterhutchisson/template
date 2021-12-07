import { SELECTED_MARKDOWNS } from "./types"

export const storeMarkdowns = (data) => {
    return {
        type: SELECTED_MARKDOWNS,
        data: data
    }
}
