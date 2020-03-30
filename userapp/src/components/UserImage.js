import React from 'react'

function UserImage(props) {
    const imageArray = [
        {name: "Leanne Graham", url: "https://cdn.dribbble.com/users/2364329/screenshots/6761626/010.jpg"},
        {name: "Ervin Howell" , url: "https://i.pinimg.com/originals/8d/14/5a/8d145a86102e26467fff65e609a9310e.jpg"},
        {name: "Clementine Bauch", url: "https://i.pinimg.com/originals/e5/c6/8e/e5c68e495aebb0c9c30d03d8827a1eb7.jpg"},
        {name: "Patricia Lebsack", url: "https://avatoon.net/wp-content/uploads/2018/07/business-woman-avatar.jpg"},
        {name: "Chelsey Dietrich", url: "https://cdn.dribbble.com/users/2364329/screenshots/10083554/media/7f7269afefd72f760638724a0f573e32.jpg"},
        {name: "Mrs. Dennis Schulist", url: "https://cdn.dribbble.com/users/2364329/screenshots/4716606/dribbble-08.jpg"},
        {name: "Kurtis Weissnat", url: "https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg"},
        {name: "Nicholas Runolfsdottir V", url: "https://cdn.dribbble.com/users/2364329/screenshots/6691641/04.jpg"},
        {name: "Glenna Reichert", url: "https://cdn.dribbble.com/users/685371/screenshots/6270960/twit_pic_2019_2x.jpg"},
        {name: "Clementina DuBuque", url: "https://cdn.dribbble.com/users/40756/screenshots/6232646/side-profile-woman_2x_2x.png"}
    ]

    const imageUrl = imageArray.find((person) => {
        return (person.name === props.name);
    })
    const url = imageUrl.url;
    return (
        <img style={props.img} src={url} alt="placeholder user avatars" className="img-fluid" />
    )
}

export default UserImage
