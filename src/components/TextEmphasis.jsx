import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';


const TextEmphasis = ({textEmphasis, setEmp}) => {
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    let div = document.getElementById('textEmphasis')
    const [boldChecked, setBoldChecked] = useState(false)
    const [italicChecked, setItalicChecked] = useState(false)
    const [strikeChecked, setStrikeChecked] = useState(false)
    // useEffect(() => {
    //     setBoldChecked(false)
    //     setItalicChecked(false)
    //     setStrikeChecked(false)
    // }, [markdownObjList])
    return (
        <div>
            <div key="inline-checkbox" className="mb-3" id="textEmphasis">
                    <Form.Check
                        inline
                        label="bold"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-1"
                        value="bold"
                        checked={boldChecked}
                        onChange={e=>{
                            if(e.target.checked){
                                setEmp(textEmphasis-1)
                            }
                            setEmp(textEmphasis+1)
                            setBoldChecked(!boldChecked)
                        }}
                    />
                    <Form.Check
                        inline
                        label="italic"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-2"
                        value="italic"
                        checked={italicChecked}
                        onChange={e=>{
                            if(e.target.checked){
                                setEmp(textEmphasis-2)
                            }
                            setEmp(textEmphasis+2)
                            setItalicChecked(!italicChecked)
                        }}
                    />
                    <Form.Check
                        inline
                        label="strikethrough"
                        type="checkbox"
                        id="inline-checkbox-3"
                        value="strikethrough"
                        checked={strikeChecked}
                        onChange={e=>{
                            if(e.target.checked){
                                setEmp(textEmphasis-4)
                            }
                            setEmp(textEmphasis+4)
                            setStrikeChecked(!strikeChecked)
                        }}
                    />
                </div>
        </div>
    )
}

export default TextEmphasis
