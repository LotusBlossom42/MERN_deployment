import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const Dashboard = () => {
    //read all - need empty array to hold info
    const [pets, setPets] = useState([])
    //boolean to go into 2nd argument
    // const [state, setState] = useState(false)

    useEffect( () => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, []) //include second argument in useEffect to retrieve new list  

    // const deleteHandler = (id) => {
    //     axios.delete(`http://localhost:8000/api/pets/${id}`)
    //         //successful response set to opposite of state to trigger rerender with new info from db
    //         .then(res => setState(!state)) //can maybe use history.push, but it is on the same page 
    //         .catch(err => console.log(err))
    // }
    //LINE 38: Must wrap within arrow function to pass in variable so as to not execute function immediately
    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <h3>These pets are looking for a good home</h3>
            <h4><Link to={"/pets/new"}>Add a pet to the shelter</Link></h4>
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <th>Pet Name: </th>
                        <th>Pet Type: </th>
                        <th>Actions: </th>
                    </thead>
                    <tbody>
                    {
                    pets.map((pet, idx) => {
                        return(
                        <>
                            <tr key = {idx}>    
                                <td> {pet.name}</td>
                                <td> {pet.type}</td>
                                <td> 
                                    <Link to={`/pets/${pet._id}`}>
                                        Details
                                    </Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <Link to={`/pets/${pet._id}/edit`}>
                                        Edit
                                    </Link>&nbsp;&nbsp;&nbsp;
                                </td>          
                            </tr>
                        </>
                        )
                    })
                }
                        <br/>
                    </tbody>
                </table>         
            <br/>
        </fieldset>
                        )
}

export default Dashboard
