import React from 'react'

function MainPage() {
    const mainStyle = {
        fontFamily: "Karla, sans-serif",
        backgroundColor: "rgb(245, 79, 79)",
        textAlign: "center"
    }
    return (
        <div class="jumbotron jumbotron-fluid" style={mainStyle}>
            <div class="container">
                <h1 class="display-4">Company Clouds </h1>
                <p class="lead">Bring your Employee Directory to Life!</p>
            </div>
        </div>
    )
}

export default MainPage
