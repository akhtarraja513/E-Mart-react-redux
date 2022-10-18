import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem, DeleteItem } from '../redux/action';


const Cart = () => {

    const state = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    const handleSubButton = (item) => {
        dispatch(DeleteItem(item))
    }

    const handleAddButton = (item) => {
        dispatch(AddItem(item))
    }
  return (
    <>
        <div className="container py-5">
            {state.map(product => (
                <div className="row" key={product.id}>
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height={200} width={180} />
                </div>
                <div className="col-md-4">
                    <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                        {product.qty} X $ {product.price} = $ {product.qty * product.price}
                    </p>
                    <button className='btn btn-outline-dark me-4' onClick={() => handleSubButton(product)}>
                        <i className='fa fa-minus'></i>
                    </button>
                    <button className='btn btn-outline-dark me-4' onClick={() => handleAddButton(product)}>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Cart