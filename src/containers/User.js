import React, { useEffect, useState } from 'react'

function User() {
    const [profileURL, setprofileURL] = useState("");
    const [name, setName] = useState('');

    useEffect(() => {
        setprofileURL(window.data.users[0].profilepicture)
        setName(window.data.users[0].username)
        return;
    }, [window.data.users[0]]);

    return (
        <div style={{ textAlign: "center", display: "flex", maxWidth: "200px" }}>
            <h4 style={{ textAlign: "center", display: "inline-block", margin: "auto", padding: "auto" }}>
                Username: <h5>{name}
                </h5>
            </h4>
            <img src={profileURL} alt="" style={{ width: "100px", borderRadius: "100%", }} />

        </div>
    )
}

export default User