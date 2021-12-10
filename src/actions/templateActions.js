import { EDIT_MARKDOWN_STATE_TEMPLATE, EDIT_MARKDOWN_TEMPLATE, DELETE_MARKDOWN_TEMPLATE } from "./types"

export const switchToEditTemplate = (obj) => {
    return {
        type: EDIT_MARKDOWN_STATE_TEMPLATE,
        markdownObj: obj
    }
}

export const editMarkdownTemplate = (obj) => {
    return {
        type: EDIT_MARKDOWN_TEMPLATE,
        markdownObj: obj
    }
}

export const deleteMarkdownTemplate = (obj) => {
    return {
        type: DELETE_MARKDOWN_TEMPLATE,
        markdownObj: obj
    }
}





