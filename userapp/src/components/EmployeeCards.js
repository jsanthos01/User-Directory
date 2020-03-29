import React from 'react'

function EmployeeCards() {
    const CardStyle = {
        cardWrapper: {width: "20rem", fontFamily: "Karla, sans-serif"},
        liStyle: {fontSize: "14px"}
    }
    return (
        <div class="card m-3 " style={CardStyle.cardWrapper}>
            <div class="card-header text-white bg-primary">
                <h3>Norma</h3>
                <h5>Engineer <i class="fas fa-hard-hat"></i></h5>
            </div>
            <div class="card-body bg-light text-dark">
                <ul class="list-group">
                    <li class="list-group-item" style={CardStyle.liStyle}>ID: 2</li>
                    <li class="list-group-item" style={CardStyle.liStyle}>Email: asdasd</li>
                    <li class="list-group-item" style={CardStyle.liStyle}>GitHub: asd</li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCards
