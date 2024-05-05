import React from 'react'
import PropTypes from 'prop-types';
import banner from "../Bannerim.png";

function Card(props) {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-2xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white dark:border">
  <figure><img src={banner} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.name}
      <div className="badge badge-secondary">{props.category}</div>
    </h2>
    <p>{props.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{props.price}$</div> 
      <div className="badge badge-outline hover:bg-pink-600 hover:text-white duration-300 cursor-pointer">Buy now</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card 