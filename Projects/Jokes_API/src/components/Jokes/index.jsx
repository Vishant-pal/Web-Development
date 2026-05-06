


import { useState, useEffect } from "react";
import "./index.css"
function JokesData(){
    const [jokes, setJokes] = useState([])


    useEffect(() => {
        async function fetchedData(){
            const url = "https://api.freeapi.app/api/v1/public/randomjokes"
            const options = {
                method: 'GET',
                headers: { accept: 'application/json' }
            };

            try {
                const response = await fetch(url, options)
                const data = await response.json()
                
                setJokes(data.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchedData()
    },[])
    
    
    
    return(
        <div className="main-container">
            {jokes.map((joke) => (
                <div className="main-card">
                    <p className="card-content">{joke.content}</p>
                    <p className="joke-id">{joke.id}</p>
                </div>
            ))}
        </div>
    )
}

export default JokesData