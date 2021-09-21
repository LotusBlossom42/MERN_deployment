//any calls to database
import axios from 'axios'
import React from 'react'
//any read functionality will need:
import {useEffect, useState} from 'react';
//if we use /:path variable in app.js we need to useParams to pullout variable
import { useParams, Link, useHistory } from 'react-router-dom';

const Details = () => {

    //ABSOLUTELY MUST MATCH :PATH VARIABLE IN REACT ROUTER
    //we deconstruct the path variable 'id' so we can string interpolate it
    const {id} = useParams()
    const history = useHistory()                //using to make sure all renders at once in return statement
    const [petState, setPetState] = useState(null)
    
    //using deconstructed 'id' and useParams we can string interpolate 
    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPetState(res.data))
            .catch(err => console.log(err))

    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    return (
        <>
        {   (petState) ?
            <fieldset>
                <legend>Details.jsx</legend>
                <h4><Link to={"/"}>Back to Home</Link></h4>
                <h3>Details about:&nbsp;{petState.name}</h3>
                <div>
                    <h4>Pet type:&nbsp;&nbsp;{petState.type}</h4>
                    <h4>Description:&nbsp;&nbsp;{petState.description}</h4>
                    <br/>
                    <h4>Skills:</h4>
                    <h5>{petState.skill1}</h5>  
                    <h5>{petState.skill2}</h5>  
                    <h5>{petState.skill3}</h5>  
                    <br/>
                    {/* <Link to={`/pets/${petState._id}/edit`}>Edit</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp; */}
                    <button className="btn btn-danger" onClick={deleteHandler}>Adopt&nbsp;{petState.name} </button>
                </div>
            </fieldset> : <h1>Loading...</h1>
        }
        </>
    )
}

export default Details
