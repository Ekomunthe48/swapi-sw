import React ,{useState, useEffect} from 'react';
import axios from 'axios'

const api = 'https://swapi.dev/api/films/'



const Film = () => {
  const [film, setFilm] = useState([])

  useEffect(() => {
    axios.get(api).then(res => {
      console.log('values ', JSON.stringify(res.data.results))
      setFilm(res.data.results)
  })
}, [])

const showFilm = (Films) => {
  let res = []
  let index = 1
  for (let result of Films) {
    let detail =
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{result.title}</h5>
          <span></span>
          <p className="card-text">{result.release_date}</p>
          <p className="card-text">{result.director}</p>
          <p className="card-text">{result.producer}</p>
          <p className="card-text">{result.opening_crawl}</p>
        </div>
      </div>
    res.push(detail)
    index++
  }
  return res

}

  return (
   <div className="container">
     <div className="row">
        {showFilm(film)}
     </div>
   </div>
  );
}

export default Film;