import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Form} from 'react-bootstrap';
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
import DisplayEditPreviews from './DisplayEditPreviews';

function NonStructuredForm({overallForm}) {
  const basicListGlobal = useSelector(state => state.infoReducer.basicList)
  const [markdownInput, setMarkdownInput] = useState("")
  const [markdownType, setMarkdownType] = useState("")
  const [markdownForm, setMarkdownForm] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    setMarkdownInput("")
  }
  const displayComponent = (type) => {
    switch(type){
      case "Headings":
        return <Headings name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Code":
        return <Code name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Horizontal Rules":
        return <HorizontalRule name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Paragraphs":
        return <Paragraph name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Line Breaks":
        return <LineBreak name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Blockquotes":
        return <BlockQuote name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Images":
        return <Image name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Links":
        return <Link name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Unordered Lists":
        return <UnOrderedList name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      case "Ordered Lists":
        return <OrderedList name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
      default:
        return <>no form yet</>
    }
  }
  
  return (
    <>
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