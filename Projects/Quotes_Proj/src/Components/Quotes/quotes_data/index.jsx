// const fetch = require('node-fetch');
import "./style.css"
const url = 'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human';
const options = { method: 'GET', headers: { accept: 'application/json' } };


const response = await fetch(url, options);
const result = await response.json();
const {statusCode, data, objData} = result

const quotes = data.data
console.log(statusCode);





function Quotes(){
    return(
        <div className="main-container">
            {quotes.map((quote) => (
                <div className="quote-card">
                    <p className="quote-text">{quote.content}</p>
                    <p className="quote-author">{quote.author}</p>
                </div>
            ))}
        </div>
    )
}


export default Quotes