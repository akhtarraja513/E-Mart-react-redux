import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Products = () => {

    const [date, setDate] = useState([]);
    const [filter, setFilter] = useState(date);
    const [loading, setLoading] = useState(false);
    let componenetMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const responce = await fetch("https://fakestoreapi.com/products")
            if (componenetMounted) {
                setDate(await responce.clone().json())
                setFilter(await responce.json())
                setLoading(false);
            }
            return () => {
                componenetMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProducts = (cat) => {
        const updatedList = date.filter((x) => x.category === cat )
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttond d-flex justify-content-center mb-5 pb-5">
                    <div className="btn btn-outline-dark ms-2" onClick={() => setFilter(date)}>All</div>
                    <div className="btn btn-outline-dark ms-2" onClick={() => filterProducts("men's clothing")}>Mens's clothes</div>
                    <div className="btn btn-outline-dark ms-2" onClick={() => filterProducts("women's clothing")}>Women's clothes</div>
                    <div className="btn btn-outline-dark ms-2" onClick={() => filterProducts("jewelery")}>Jewelery</div>
                    <div className="btn btn-outline-dark ms-2" onClick={() => filterProducts("electronics")}>Electronic</div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">$ {product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">buy now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </>

        )
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='dispaly-6 fw-bolder text-center'>Latest Products</h1><hr />
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products