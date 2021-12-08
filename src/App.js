import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, Col} from 'react-bootstrap';
import Headings from './components/Headings';
import Code from './components/Code';
import HorizontalRule from './components/HorizontalRule';
import Paragraph from './components/Paragraph';
import LineBreak from './components/LineBreak';
import BlockQuote from './components/BlockQuote';
import { loadMarkdownBasic, loadMarkdownCheat } from './actions/apiAction';
import DisplayPreviews from './components/DisplayPreviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
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

  useEffect(() => {
    const basicSyntax = async () => {
        let response = await fetch('https://www.markdownguide.org/api/v1/basic-syntax.json')
        let data = await response.json()
        setBasicList(data.basic_syntax)
    }
    const cheatSheet = async () => {
        let response = await fetch('https://www.markdownguide.org/api/v1/cheat-sheet.json')
        let data = await response.json()
        setCheatSheetList(data.cheat_sheet)
    }
    basicSyntax()
    cheatSheet()
  }, [])

  useEffect(() => {
    dispatch(loadMarkdownBasic(basicList))
  }, [basicList])
  useEffect(() => {
    dispatch(loadMarkdownCheat(cheatSheetList))
  }, [cheatSheetList])
 
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
      default:
        return <>no form yet</>
    }
  }
  
  return (
    <>
      App
      <Form onSubmit={handleSubmit}>
        <select defaultValue={markdownType} onChange={e=>setMarkdownForm(e.target.value)}>
          <option hidden value="defaultValue">Pick a Type</option>
          {basicList.map(basicObj => {
            return <option key={basicObj.name} value={basicObj.name}>{basicObj.name}</option>
          })}
        </select>
      </Form>
      {(markdownForm) 
      ? 
      <> here - {displayComponent(markdownForm)}</>
    :
    <>no form</>
    }
      <DisplayPreviews handleMarkdownFormState={setMarkdownForm}/>
    </>
  )
}

export default App

