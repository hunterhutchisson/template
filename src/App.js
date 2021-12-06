import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, Col} from 'react-bootstrap';
import Headings from './components/Headings';
import { loadMarkdownBasic, loadMarkdownCheat } from './actions/apiAction';

function App() {
  const dispatch = useDispatch();
  const basicListGlobal = useSelector(state => state.infoReducer.basicList)
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
    console.log(type)
    switch(type){
      case "Headings":
        return <Headings />
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
        {basicListGlobal.map(basicObj => {
            return <Form.Check onChange={(e)=>console.log(e.target.value)} value={basicObj.name} label={basicObj.name}/>
          })}
        
        <textarea  rows="4" cols="50" value={markdownInput} onChange={e=>setMarkdownInput(e.target.value)}>
        enter markdown</textarea>
        <Button type="submit" onClick={e=>console.log(e.target)}>translate</Button>
      </Form>
      {(markdownForm) 
      ? 
      <> here - {displayComponent(markdownForm)}</>
    :
    <>no form</>
    }
      <div dangerouslySetInnerHTML={{__html : returnedOut}}></div>
    </>
  )
}

export default App

