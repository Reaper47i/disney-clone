import React from "react";

function MovieCard(props) {
  return (
    <div className="card">
      <img
        src={`http://image.tmdb.org/t/p/w342/${props.img}`}
        alt={props.title}
      />
    </div>
  );
}

export default MovieCard;
