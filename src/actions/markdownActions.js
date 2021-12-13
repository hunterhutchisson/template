import { SELECTED_MARKDOWNS, EDIT_MARKDOWN_STATE, EDIT_MARKDOWN, DELETE_MARKDOWN, RESET_MARKDOWN } from "./types"

export const storeMarkdowns = (data) => {
    return {
        type: SELECTED_MARKDOWNS,
        data: data
    }
}

export const switchToEdit = (obj) => {
    return {
        type: EDIT_MARKDOWN_STATE,
        markdownObj: obj
    }
}

export const editMarkdown = (obj) => {
    return {
        type: EDIT_MARKDOWN,
        markdownObj: obj
    }
}

export const deleteMarkdown = (obj) => {
    return {
        type: DELETE_MARKDOWN,
        markdownObj: obj
    }
}

export const resetMarkdown = () => {
    return {
        type: RESET_MARKDOWN
    }
}






