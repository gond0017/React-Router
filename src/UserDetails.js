import React from 'react'
import './ProfileCardDetails.css'
import { Link } from 'react-router-dom'

function UserDetails(props){

    return(
        <div className="ProfileCardDetails">
            <div className="card-details-body">
                <h2>{props.details.name}</h2>
                <p className="Profile-name">
                    <span className="profile-login">{props.details.website}</span>
                </p>
                <p className="profile-bio">{props.details.phone}</p>
                <p className="profile-details-company">
                    <h3>{ props.details.company.name }</h3>
                    <p className="profile-login">{ props.details.company.catchPhrase }
                    <h5>{ props.details.company.bs }</h5>
                    </p>
                    
                </p>
                <p className="card-address">
                    {props.details.address.street}<br/>
                    {props.details.address.suite}<br/>
                    {props.details.address.city}{ ' - ' }
                    {props.details.address.zipcode}

                </p>
            </div>
            <br/>
            <div className="card-buttons">
                <Link to="/posts" onClick={() => props.getPost(props.details)} className="load-comment load-btn">Load Posts</Link>
                <Link to="/userToDos" onClick={() => props.getToDos(props.details)} className="load-posts load-btn">Load To-do</Link>
            </div>
        </div>
    )

}

export default UserDetails