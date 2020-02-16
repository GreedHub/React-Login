import React from 'react'

function Home({logout}) {
    const logOut = ()=>{
        logout();
    }

    return (
        <div>

            <button onClick={logout}>LogOut</button>

        </div>
    )
}

export default Home
