import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  // <Link exact to='/'>
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink 
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }} key= {movie.id} 
          to= {`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
      ))}
     <Link to= '/'><div className="home-button">Home</div></Link>
    </div>
  // </Link>
);

export default SavedList;
