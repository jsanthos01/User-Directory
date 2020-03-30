import React from 'react'
// import SearchForm from './SearchForm'
import UserImage from './UserImage'


function EmployeeCards(props) {
    const CardStyle = {
        cardWrapper: {width: "20rem", fontFamily: "Karla, sans-serif"},
        liStyle: {fontSize: "14px"},
        containerStyle: { 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
        },
        imgStyle: {
            border: "1px solid #ddd",
            padding: "5px",
            margin: "auto",
            display: "block"
        }
    }
    return (
        <div className="container-fluid" style={CardStyle.containerStyle}>
            {props.showEmployeeList.map((user) => 
                (
                    <div className="card m-3 " key={user.id}style={CardStyle.cardWrapper}>
                        <div className="card-image">
                            <UserImage img={CardStyle.imgStyle}name={user.name}/>
                        </div>
                        <div className="card-header text-white bg-primary">
                            <h3>{user.name}</h3>
                            <h5>Company: {user.company.name}</h5>
                        </div>
                        <div className="card-body bg-light text-dark">
                            <ul className="list-group">
                                <li className="list-group-item" style={CardStyle.liStyle}><b>ID:</b> {user.id}</li>
                                <li className="list-group-item" style={CardStyle.liStyle}><b>Email:</b> {user.email}</li>
                                <li className="list-group-item" style={CardStyle.liStyle}><b>Phone:</b> {user.phone}</li>
                                <li className="list-group-item" style={CardStyle.liStyle}><b>Personal Website: </b> {user.website}</li>
                            </ul>
                        </div>
                    </div>
                )
            )}
        </div>   
    )
}

export default EmployeeCards
