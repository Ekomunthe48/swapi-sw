import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './scss/people.scss'

const api = 'https://swapi.dev/api/people/'



const People = () => {
  const [People, setPeople] = useState([])

  useEffect(() => {
    axios.get(api).then(res => {
      console.log('values ', JSON.stringify(res.data.results))
      setPeople(res.data.results)
    })
  }, [])

  const showPeople = (Peoples) => {
    let res = []
    let detail_people = []
    let index = 1
    for (let People of Peoples) {
      let people =
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{People.name}</h5>
            <p className="card-text">{People.birth_year}</p>
            <p className="card-text">{People.eye_color}</p>
            <a href="#" className="btn btn-primary">See More</a>
          </div>
        </div>
      res.push(people)
      index++
    }
    return res

  }


  return (
    <div className="container">
      <div className="row">
        <div className="kotak">
        {showPeople(People)}
        </div>
      </div>
    </div>
  );
}

export default People;