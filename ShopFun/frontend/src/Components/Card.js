import React from 'react';
import { Link } from 'react-router-dom';

import '../index.css';
import '../common.css';
import Rating from './Rating';

export default function Card({ data }) {
  return (
    <div className='card home-card'>
      <Link to={`product/${data._id}`}>
        <img className='medium' src={data.image} alt={data.name}></img>
      </Link>
      <div className='card-body'>
        <Link to={`/product/${data._id}`}>
          <h2>{data.name}</h2>
        </Link>
        <Rating rating={data.rating} numReviews={data.numReviews} />
        <div className='price'>${data.price}</div>
      </div>
    </div>
  );
}
