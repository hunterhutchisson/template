import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetMarkdown } from '../actions/markdownActions';
import {Form} from 'react-bootstrap';
import Headings from './Headings';
import Code from './Code';
import HorizontalRule from './HorizontalRule';
import Paragraph from './Paragraph';
import LineBreak from './LineBreak';
import BlockQuote from './BlockQuote';
import Image from './Image';
import LinkURL from './Link';
import UnOrderedList from './UnOrderedList';
import OrderedList from './OrderedList';
import DisplayEditPreviews from './DisplayEditPreviews';
import {Link} from 'react-router-dom'


function NonStructuredForm({overallForm}) {
  const dispatch = useDispatch();
  const basicListGlobal = useSelector(state => state.infoReducer.basicList)
  const [markdownInput, setMarkdownInput] = useState("")
  const [markdownType, setMarkdownType] = useState("")
  const [markdownForm, setMarkdownForm] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
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
        return <LinkURL name={type} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
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
      <div class="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="overallForm d-flex flex-column mx-auto">
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

          </div>
        </div>
      </div>

          <DisplayEditPreviews handleMarkdownFormState={setMarkdownForm}/>
          <div class="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="overallForm-app d-flex justify-content-around text-center">

            <div className="col-12 d-flex justify-content-between">
            <button  className="btn btn-ocean" onClick={()=>dispatch(resetMarkdown())}>Delete All</button>
            <Link to="/preview" className="margin-zero"><button  className="btn btn-ocean" >View Preview</button></Link>
            <Link to="/markdown" className="margin-zero"><button  className="btn btn-ocean" >View Markdown</button></Link>
            </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default NonStructuredForm