import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sampleAction } from '../actions/templateActions'

function Sample() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.sample.count)

    //componentDidMount if dependency list is empty
    useEffect(() => {

        //componentDidUnmount, used as cleanup function
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <>
            <h1>Redux Template</h1>

            <h3>{count}</h3>

            <button onClick={()=>dispatch(sampleAction(4))}>click to update global state</button>
        </>
    )
}

export default Sample
