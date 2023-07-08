import React from 'react'

function Detail({ selected, close }) {
  return (
    <div className="d-flex aling-items-center justify-content-center ">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <img src={selected.Poster} alt="" />
          </div>
          <div className="col-12 col-md-6 text-white">
            <h2>{selected.Title}</h2>
            <p>Actors : {selected.Actors}</p>
            <p> {selected.Plot}</p>
            <p>Genre : {selected.Genre}</p>
            <p>Year : {selected.Year}</p>
            <p>Rating : {selected.imdbRating}</p>
            <p>Awords : {selected.Awards}</p>
            <p>Language : {selected.Language}</p>
            <p>Relized : {selected.Released}</p>
            <button onClick={close} className="btn btn-danger">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
