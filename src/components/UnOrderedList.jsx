import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import ListItem from "./ListItem";
import { fetchHTML } from './utils'

const UnorderedList = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.textInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")
    const [listItems, setListItems] = useState(()=>markdownObjPassed ? markdownObjPassed.listItems:[])

    const handleSubmitUnOrdered =  () => {
        let assembledFetch =``
        let assembledCombined=``
        listItems.forEach(item=>{
            assembledFetch += `
${item.itemTextForFetch}`
            assembledCombined+=`${item.itemTextForMarkdown}`
        })
        setCombinedInput(assembledCombined)
        fetchHTML(assembledFetch, setHtmlOutput)

    }
    const handleDeleteItem = (itemObj) => {
        let copyListItems = [...listItems]
        let newList = copyListItems.filter(item=> item.id !== itemObj.id)
        setListItems(newList)
    }
    const handleDeleteLastItem = () => {
        let copyListItems = [...listItems]
        copyListItems.pop()
        setListItems(copyListItems)
    }
    useEffect(() => {
        let mdID = markdownObjPassed ? markdownObjPassed.id : uuidv4()
        let mdName = markdownObjPassed ? markdownObjPassed.name : name
        let markdownObj = {
            id: mdID,
            textInput,
            combinedInput,
            htmlOutput,
            name: mdName,
            listItems,
            edit: false
        }
        if(markdownObj.htmlOutput.length > 0){
            (markdownObjPassed ? ((overallForm === "template") ? dispatch((editMarkdownTemplate(markdownObj))):dispatch(editMarkdown(markdownObj))):dispatch(storeMarkdowns(markdownObj)))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        {(listItems.length > 0)
        ?
        <>
        {listItems.map((item, index)=>{
            return (<>
            <ListItem listItems={listItems} setListItems={setListItems} item={item} orderType="unordered" index={index}/>
            {/* <button onClick={()=>handleDeleteItem(item)}>delete item</button> */}
            </>)
        })}
        <ListItem listItems={listItems} setListItems={setListItems} orderType="unordered"/>
        </>
        :
        <ListItem listItems={listItems} setListItems={setListItems} orderType="unordered" index={0}/>
        }
        <br />
        <div className="col-12 d-flex justify-content-start">
        <button  className="btn btn-ocean" onClick={()=>handleSubmitUnOrdered()}>SUBMIT</button>
        {(listItems.length > 0) ? <button  className="btn btn-ocean margin-left" onClick={()=>handleDeleteLastItem()}>DELETE LAST ITEM</button>:null}
        </div>
    </>
    )
}

export default UnorderedList
