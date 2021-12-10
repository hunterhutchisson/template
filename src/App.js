import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplateForm from './components/TemplateForm'
import NonStructuredForm from './components/NonStructuredForm';
import { loadMarkdownBasic, loadMarkdownCheat, switchOverallForm } from './actions/infoAction';

function App() {
  const dispatch = useDispatch();
  const overallFormState = useSelector(state => state.infoReducer.overallFormState)
  const [basicList, setBasicList] = useState([])
  const [cheatSheetList, setCheatSheetList] = useState([])

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

  const displayForms = (type) => {
    switch(type){
      case "nonstructured":
        return <NonStructuredForm overallForm={type}/>
      case "template":
        return <TemplateForm overallForm={type}/>
      default:
        return <>no form yet</>
    }
  }
  
  return (
    <>
      App
      <button onClick={()=>dispatch(switchOverallForm("nonstructured"))}>NonStructured</button>
      <button onClick={()=>dispatch(switchOverallForm("template"))}>Template</button>
      <>here {displayForms(overallFormState)}</>
    </>
  )
}

export default App

