import React from 'react'
import { useState, useEffect } from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
        }, [])
    //the form data as a whole object
    const [formState, setFormState] = useState({
        name : "",
        type : "",
        description : "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

         //for validations
    const [validState, setValidState] = useState({})

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        })
    }
    //mostly copied from create with some changes
    const submitHandler = e => {
        e.preventDefault();
        //request to update - all form info stored in formState
        axios.put(`http://localhost:8000/api/pets/${id}`, formState)
            //if successful
            .then(res => {
                    //  //only resetting for successful response, if unsuccessful, data is saved in .catch to edit
                    //  setFormState({
                    //     title : "",
                    //     price : -1,
                    //     description : ""
                    // })
                history.push(`/pets/${id}`)
            })
            //errors object contains the validation msgs we want to display
            //the same as create 
            .catch(err => {
                console.log("CATCH: ", err.response.data)
                //capture error messages generated from backend
                const {errors} = err.response.data
                //empty error object which we will fill failed validation errors with
                let errorObj = {}
                //iterates thru errors object coming from backend and pulling keys and values out
                for(let [key, value] of Object.entries(errors)) {
                    //set key as failed attribute, set value as the message for failed validation
                    errorObj[key] = value.message
                }
                console.log(errorObj)
                setValidState(errorObj)
            })
    }

    
    return (
        <fieldset>
            <legend>Update.jsx</legend>
            <h5><Link to={"/"}>Back to Home</Link></h5>
            <h3>Edit {formState.name}</h3>
            <form onSubmit={submitHandler}>
            <p>
                <label>Pet Name:</label><br/>
                <input type="text" name="name" onChange={changeHandler} value={formState.name}/>
                {(validState.name) ? <p style={{color:"red"}}>{validState.name}</p> : null}
            </p>
            <p>
                <label>Type: </label><br/>
                <input type="text" name="type" onChange={changeHandler} value={formState.type}/>
                {(validState.type) ? <p style={{color:"red"}}>{validState.type}</p> : null}
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" name="description" onChange={changeHandler} value={formState.description}/>
                {(validState.description) ? <p style={{color:"red"}}>{validState.description}</p> : null}
            </p>
            <h4>Skills &#40;Optional&#41;:</h4>
            <p>
                <label>Skill #1: </label><br/>
                <input type="text" name="skill1" onChange={changeHandler} value={formState.skill1}/>
                {(validState.skill1) ? <p style={{color:"red"}}>{validState.skill1}</p> : null}
            </p>
            <p>
                <label>Skill #2: </label><br/>
                <input type="text" name="skill2" onChange={changeHandler} value={formState.skill2}/>
                {(validState.skill2) ? <p style={{color:"red"}}>{validState.skill2}</p> : null}
            </p>
            <p>
                <label>Skill #3: </label><br/>
                <input type="text" name="skill3" onChange={changeHandler} value={formState.skill3}/>
                {(validState.skill3) ? <p style={{color:"red"}}>{validState.skill3}</p> : null}
            </p>
            <input className="btn btn-warning" type="submit" value="Update Pet!" />

            </form>
            <br/>
        </fieldset>
    )
}

export default Update