import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';

const Headings = () => {
    const [headingSize, setHeadingSize] = useState(0)
    
    const handleSubmitHeading = (e) => {
        e.preventDefault()
        
    }
    return (
    <>
        <Form>
                <div key="inline-checkbox" className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-1"
                        value="1"
                        onChange={e=>setHeadingSize(1)}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-2"
                        value="2"
                        onChange={e=>setHeadingSize(2)}
                    />
                    <Form.Check
                        inline
                        label="3"
                        type="checkbox"
                        id="inline-checkbox-3"
                        value="3"
                        onChange={e=>setHeadingSize(3)}
                    />
                    <Form.Check
                        inline
                        label="4"
                        type="checkbox"
                        id="inline-checkbox-4"
                        value="4"
                        onChange={e=>setHeadingSize(4)}
                    />
                    <Form.Check
                        inline
                        label="5"
                        type="checkbox"
                        id="inline-checkbox-5"
                        value="5"
                        onChange={e=>setHeadingSize(5)}
                    />
                    <Form.Check
                        inline
                        label="6"
                        type="checkbox"
                        id="inline-checkbox-6"
                        value="6"
                        onChange={e=>setHeadingSize(6)}
                    />
                </div>
                <input type="text" placeholder="Heading"/>
                <button>submit</button>
        </Form>
    </>
    )
}

export default Headings