import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import TextEmphasis from "./TextEmphasis";


const ListItem = ({item, setListItems, listItems}) => {
    const dispatch = useDispatch()
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [currentlyChecked, setCurrentlyChecked] = useState(()=>item ? item.nested:false)
    const [itemTextInput, setItemTextInput] = useState(()=>item ? item.itemTextInput:"")
    const [combinedInput, setCombinedInput] = useState("")
    const [textEmphasis, setTextEmphasis] = useState(0)

    const addEmp = (text, empVal, checked) => {
        let empText
        let mdEmpText
        let fetchEmpText
        switch(empVal){
            case 1:
                empText = "- *"+text+"*"
                break
            case 2:
                empText = "- **"+text+"**"
                break
            case 3:
                empText = "- ***"+text+"***"
                break
            case 4:
                empText = "- ~~"+text+"~~"
                break
            case 5:
                empText = "- ~~*"+text+"*~~"
                break
            case 6:
                empText = "- ~~**"+text+"**~~"
                break
            case 7:
                empText = "- ~~***"+text+"***~~"
                break
            default:
                empText = "- "+text
        }

        if(checked){
            mdEmpText = "&nbsp;&nbsp;"+empText+"<br/>"
            fetchEmpText = "  "+empText
        }
        else{
            mdEmpText = empText+"<br/>"
            fetchEmpText = empText
        }
        return {
            itemTextForMarkdown: mdEmpText,
            itemTextForFetch: fetchEmpText
        }
    }
    const handleSetList = (e) => {
        e.preventDefault()
        let itemTextObj = addEmp(itemTextInput, textEmphasis, currentlyChecked)
        let obj = {
            itemTextForMarkdown: itemTextObj.itemTextForMarkdown,
            itemTextForFetch: itemTextObj.itemTextForFetch,
            itemTextInput,
            nested: currentlyChecked
        } 
        setListItems([...listItems, obj])
        setItemTextInput("")
    }

    return (
        <>
            <Form onSubmit={handleSetList}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter List Item</Form.Label>
                <TextEmphasis textEmphasis={textEmphasis} setEmp={setTextEmphasis}/>
                <Form.Check label="nested item" checked={currentlyChecked} onChange={()=>setCurrentlyChecked(!currentlyChecked)}/>
                <Form.Control type="text" placeholder="List Item (leave last item blank and don't add to list)" value={itemTextInput} onChange={e=>setItemTextInput(e.target.value)}/>
                {item ? <>item present</>:<button>add to list</button>}
                
            </Form.Group>
            </Form>
        </>
    )
}

export default ListItem
