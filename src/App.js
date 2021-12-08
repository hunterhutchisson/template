import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, Col} from 'react-bootstrap';
import TemplateForm from './components/TemplateForm'
import NonStructuredForm from './components/NonStructuredForm';
import { loadMarkdownBasic, loadMarkdownCheat } from './actions/apiAction';
import DisplayEditPreviews from './components/DisplayEditPreviews';
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
  const [formTypeSelection, setFormTypeSelection] = useState(null)

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
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('submit')
  //   setMarkdownInput("")
  // }
  const displayForms = (type) => {
    switch(type){
      case "nonstructured":
        return <NonStructuredForm handleMarkdownFormState={setMarkdownForm}/>
      case "template":
        return <TemplateForm handleMarkdownFormState={setMarkdownForm}/>
      default:
        return <>no form yet</>
    }
  }
  
  return (
    <>
      App

      {(formTypeSelection) 
      ? 
      <>here {displayForms(formTypeSelection)}</>
    :
    <>
    <button onClick={()=>setFormTypeSelection("nonstructured")}>NonStructured</button>
    <button onClick={()=>setFormTypeSelection("template")}>Template</button>
    </>
    }

    </>
  )
}

export default App

