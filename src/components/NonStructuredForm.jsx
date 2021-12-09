import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, Col} from 'react-bootstrap';
import Headings from './Headings';
import Code from './Code';
import HorizontalRule from './HorizontalRule';
import Paragraph from './Paragraph';
import LineBreak from './LineBreak';
import BlockQuote from './BlockQuote';
import Image from './Image';
import Link from './Link';
import UnOrderedList from './UnOrderedList';
import OrderedList from './OrderedList';
import { loadMarkdownBasic, loadMarkdownCheat } from '../actions/apiAction';
import DisplayEditPreviews from './DisplayEditPreviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NonStructuredForm() {
  const dispatch = useDispatch();
  const basicListGlobal = useSelector(state => state.infoReducer.basicList)
  const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
  const [isEdit, setIsEdit] = useState(false)
  const [markdownInput, setMarkdownInput] = useState("")
  const [returnedOut, setReturnedOut] = useState("")
  const [markdownType, setMarkdownType] = useState("")
  const [basicList, setBasicList] = useState([])
  const [cheatSheetList, setCheatSheetList] = useState([])
  const [markdownTextEmphasis, setMarkdownTextEmphasis] = useState(null)
  const [markdownForm, setMarkdownForm] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    setMarkdownInput("")
  }
  const displayComponent = (type) => {
    switch(type){
      case "Headings":
        return <Headings name={type} markdownFormActive={setMarkdownForm}/>
      case "Code":
        return <Code name={type} markdownFormActive={setMarkdownForm}/>
      case "Horizontal Rules":
        return <HorizontalRule name={type} markdownFormActive={setMarkdownForm}/>
      case "Paragraphs":
        return <Paragraph name={type} markdownFormActive={setMarkdownForm}/>
      case "Line Breaks":
        return <LineBreak name={type} markdownFormActive={setMarkdownForm}/>
      case "Blockquotes":
        return <BlockQuote name={type} markdownFormActive={setMarkdownForm}/>
      case "Images":
        return <Image name={type} markdownFormActive={setMarkdownForm}/>
      case "Links":
        return <Link name={type} markdownFormActive={setMarkdownForm}/>
      case "Unordered Lists":
        return <UnOrderedList name={type} markdownFormActive={setMarkdownForm}/>
      case "Ordered Lists":
        return <OrderedList name={type} markdownFormActive={setMarkdownForm}/>
      default:
        return <>no form yet</>
    }
  }
  
  return (
    <>
      NonStructuredForm
      <Form onSubmit={handleSubmit}>
        <select defaultValue={markdownType} onChange={e=>setMarkdownForm(e.target.value)}>
          <option hidden value="defaultValue">Pick a Type</option>
          {basicListGlobal.map(basicObj => {
            return <option key={basicObj.name} value={basicObj.name}>{basicObj.name}</option>
          })}
        </select>
      </Form>
      {(markdownForm) 
      ? 
      <>{displayComponent(markdownForm)}</>
    :
    <></>
    }
      <DisplayEditPreviews handleMarkdownFormState={setMarkdownForm}/>
    </>
  )
}

export default NonStructuredForm