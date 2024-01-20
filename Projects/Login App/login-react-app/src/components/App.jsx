import React from 'react';

var isLoggedIn = false;
const currentTime = new Date(2019, 11, 1, 9).getHours();

function App() {
    return (
        <div className='container'>
            {
                isLoggedIn ? <h1>Hello</h1> : <h1>Logged in!</h1>
            }
            {
                currentTime > 12 && <h1>Why are you still working?</h1>
            }
        </div>
    );
}

export default App;