import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import TextEmphasis from "./TextEmphasis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({item, setListItems, listItems, orderType, index, overallForm}) => {
    const [currentlyChecked, setCurrentlyChecked] = useState(()=>item ? item.nested:false)
    const [itemTextInput, setItemTextInput] = useState(()=>item ? item.itemTextInput:"")
    const [textEmphasis, setTextEmphasis] = useState(0)

    const addEmp = (text, empVal, checked, type) => {
        let empText
        let mdEmpText
        let fetchEmpText
        switch(empVal){
            case 1:
                empText = "*"+text+"*"
                break
            case 2:
                empText = "**"+text+"**"
                break
            case 3:
                empText = "***"+text+"***"
                break
            case 4:
                empText = "~~"+text+"~~"
                break
            case 5:
                empText = "~~*"+text+"*~~"
                break
            case 6:
                empText = "~~**"+text+"**~~"
                break
            case 7:
                empText = "~~***"+text+"***~~"
                break
            default:
                empText = text
        }

        if(checked && (type === "unordered")){
            mdEmpText = "&nbsp;&nbsp;- "+empText+"<br/>"
            fetchEmpText = "  - "+empText
        } else if(checked && (type === "ordered")){
            mdEmpText = "&nbsp;&nbsp;&nbsp;&nbsp;1. "+empText+"<br/>"
            fetchEmpText = "    1. "+empText
        } else if(type === "unordered"){
            mdEmpText = "- "+empText+"<br/>"
            fetchEmpText = "- "+empText
        }
        else{
            mdEmpText = "1. "+empText+"<br/>"
            fetchEmpText = "1. "+empText
        }
        return {
            itemTextForMarkdown: mdEmpText,
            itemTextForFetch: fetchEmpText
        }
    }
    const handleSetListAdd = () => {
        let itemTextObj = addEmp(itemTextInput, textEmphasis, currentlyChecked, orderType)
        let obj = {
            id: uuidv4(),
            itemTextForMarkdown: itemTextObj.itemTextForMarkdown,
            itemTextForFetch: itemTextObj.itemTextForFetch,
            itemTextInput,
            nested: currentlyChecked
        } 
        setListItems([...listItems, obj])
        setItemTextInput("")
        setTextEmphasis(0)
    }
    const handleSetListEdit = (list, itemObj) => {
        let copyList = [...list]
        let itemTextObj = addEmp(itemTextInput, textEmphasis, currentlyChecked, orderType)
        itemObj = {
            id: itemObj.id,
            itemTextForMarkdown: itemTextObj.itemTextForMarkdown,
            itemTextForFetch: itemTextObj.itemTextForFetch,
            itemTextInput,
            nested: currentlyChecked
        } 
        let newList = copyList.map(item => {
            if(item.id === itemObj.id){
                return itemObj
            }
            return item
        })
        setListItems(newList)
    }
    const handleSetListDelete = (list, itemObj) => {
        let copyList = [...list]
        let newList = copyList.filter(item => item.id !== itemObj.id)
        setListItems(newList)
    }
    return (
        <>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter List Item</Form.Label>
                {item
                ?
                <TextEmphasis textEmphasis={textEmphasis} setEmp={setTextEmphasis}/>
                :
                null
                }
                {(index !== 0) ? <Form.Check label="nested item" checked={currentlyChecked} onChange={()=>setCurrentlyChecked(!currentlyChecked)}/>:null}
                <Form.Control type="text" placeholder="List Item (leave last item blank and don't add to list)" value={itemTextInput} onChange={e=>setItemTextInput(e.target.value)}/>
                
            </Form.Group>
            </Form>
                {item 
                ? 
                <>
                        <div className="col-12 d-flex justify-content-start">
                <button  className="btn btn-ocean" onClick={()=>handleSetListEdit(listItems, item)}>
                    SAVE CHANGES
                </button>
                </div>
                </>
                :
                <div className="col-12 d-flex justify-content-start">
                <button  className="btn btn-ocean" onClick={()=>handleSetListAdd()}>ADD TO LIST</button>
                </div>
                }
        </>
    )
}

export default ListItem
