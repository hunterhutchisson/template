# MD Styles

MD Styles is a tool to help developers with the syntax of markdown enhancements for their README files

![website image](/public/images/mdsshot.png)

## Tech Stack

- Languages:
  - Javascript
  - HTML
  - CSS


- Technologies/Libraries:
  - React
  - Redux
  - Bootstrap
  - Git
  - Github
  - NPM


## Code Snippets

```js

   
import { EDIT_MARKDOWN_STATE_TEMPLATE, EDIT_MARKDOWN_TEMPLATE, DELETE_MARKDOWN_TEMPLATE, LOAD_TEMPLATE } from "../actions/types"
import templateList from "../assets/data"

const initialState = {
    templateObjList: templateList
}

const markdownReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_TEMPLATE:
            return {
                ...state,
                templateObjList: templateList
            }
        case EDIT_MARKDOWN_STATE_TEMPLATE:
            let newTemplateObjStateList = [...state.templateObjList]
            newTemplateObjStateList.map(object=>{
                if(object.id === action.markdownObj.id){
                    return action.markdownObj.edit = !object.edit
                }
                return object
            })
            return {
                ...state,
                templateObjList: newTemplateObjStateList
            }
        case EDIT_MARKDOWN_TEMPLATE:
            let newMarkdownObjEditList = [...state.templateObjList]
            let swappedObjList = newMarkdownObjEditList.map(object=>{
                if(object.id === action.markdownObj.id){
                    return action.markdownObj
                }
                return object
            })
            return {
                ...state,
                templateObjList: swappedObjList
            }
        case DELETE_MARKDOWN_TEMPLATE:
            return {
                ...state,
                templateObjList: state.templateObjList.filter(obj=> obj.id !== action.markdownObj.id),
            }
        default:
            return state
    }
}

export default markdownReducer
```


```js
import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import { fetchHTML } from './utils'

const Paragraph = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [altTextInput, setAltTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.altTextInput:"")
    const [srcInput, setSrcInput] = useState(()=>markdownObjPassed ? markdownObjPassed.srcInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")

    const combineImg = (altText, path) => {
        return setCombinedInput(`![${altText}](${path})`)
    }

    const handleSubmitImage = (e) => {
        e.preventDefault()
        combineImg(altTextInput, srcInput)
    }
    useEffect(() => {
        if(combinedInput.length){
            fetchHTML(combinedInput, setHtmlOutput)
        }
    }, [combinedInput])
    useEffect(() => {
        let mdID = markdownObjPassed ? markdownObjPassed.id : uuidv4()
        let mdName = markdownObjPassed ? markdownObjPassed.name : name
        let markdownObj = {
            id: mdID,
            altTextInput,
            srcInput,
            combinedInput,
            htmlOutput,
            name: mdName,
            edit: false
        }
        if(markdownObj.htmlOutput.length > 0){
            (markdownObjPassed ? ((overallForm === "template") ? dispatch((editMarkdownTemplate(markdownObj))):dispatch(editMarkdown(markdownObj))):dispatch(storeMarkdowns(markdownObj)))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        

            
                Path or URL:
                setSrcInput(e.target.value)}/>
            
            
                AltText:
                setAltTextInput(e.target.value)}/>
            
            SUBMIT 
        

    
    )
}

export default Paragraph
```


## Screenshots

![Another Site image](/public/images/nonstructureedit.png)

![Yet another site image](/public/images/nonstructureexample.png)

## Developers:

- Hunter:
  - Complete Site


[Hunter Hutchisson](https://github.com/hunterhutchisson)