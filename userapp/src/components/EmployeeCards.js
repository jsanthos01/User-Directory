import React from 'react'
// import SearchForm from './SearchForm'

function EmployeeCards(props) {
    const CardStyle = {
        cardWrapper: {width: "20rem", fontFamily: "Karla, sans-serif"},
        liStyle: {fontSize: "14px"},
        containerStyle: { 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
        }
    }
    // const [ employeeAvatarList , setEmployeeAvatarList ] = useState([]);

    // const [ showEmployeeAvatarList , setShowEmployeeAvatarList ] = useState([]);
    
    //gives random employee image for each user
    // async function populateEmployeeAvatarList(){
    //     const avatarListLoaded = await fetch('https://i.pravatar.cc/150').then(response => response.json());
    //     console.log(avatarListLoaded);
    //     // setEmployeeAvatarList(avatarListLoaded.message);
    // }



    // useEffect (function(){
    //     populateEmployeeAvatarList();
    // },[])

    return (
        <div className="container" style={CardStyle.containerStyle}>
            {props.showEmployeeList.map((user) => 
                (
                    <div className="card m-3 " key={user.id}style={CardStyle.cardWrapper}>
                        <div className="card-image">
                            <img src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png" alt="placeholder user avatars" className="img-fluid" />
                        </div>
                        <div className="card-header text-white bg-primary">
                            <h3>{user.name}</h3>
                            <h5>Company: {user.company.name}</h5>
                        </div>
                        <div className="card-body bg-light text-dark">
                            <ul className="list-group">
                                <li className="list-group-item" style={CardStyle.liStyle}>Email: {user.email}</li>
                                <li className="list-group-item" style={CardStyle.liStyle}>Phone: {user.phone}</li>
                                <li className="list-group-item" style={CardStyle.liStyle}>Address: {user.address.suite}, {user.address.street}, {user.address.city} </li>
                                <li className="list-group-item" style={CardStyle.liStyle}>Personal Website: {user.website}</li>
                            </ul>
                        </div>
                    </div>
                )
            )}
        </div>   
    )
}

export default EmployeeCards
