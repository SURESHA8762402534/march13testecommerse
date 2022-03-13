import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import {AddShoppingCart} from '@mui/icons-material'
// import makeStyles from './styles'
import { addaction } from '../../../action/action';
import { useDispatch } from 'react-redux';
import {useState, useRef} from 'react';


const Product = ({product}) => {

    // const classes = makeStyles();

    // const nameref = useRef(null)

    // const [productname, profunc] = useState({});

    const dispatchfunc = useDispatch();
    const usedispatch = (newvalue) =>{
        dispatchfunc(addaction(newvalue))
    }



    // const handleClick = ()=>{
    //     profunc(nameref.current.innerText)
        
    // }

  return (


    <>
    <div className="flow container mt-5">
        <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header text-center  bg-secondary">
                    <h5 className='text-light'>{product.name}</h5>
                    </div>
                    <div className="card-body text-center">
                        <img className='img' src={product.src} alt="" />
                        </div>
                        <div className="card-footer text-center text-danger bg-warning">
                            <small className='p me-5'>{product.description}</small>
                            <small><button className="btn-primary" onClick={()=> usedispatch(product)}>Add to cart</button></small>
                            <br />
                            <small>Rs. {product.price}</small>
                            </div>
                </div>
            </div>
            </div>
        </div>
    </>
//    <Card className={classes.root}>
//        <CardMedia className={classes.media} image='' title={product.name} />
//        <CardContent>
//            <div className={classes.cardContent}>
//                <Typography variant='h5' gutterBottom>
//                    {product.name}
//                    </Typography>

//                    <Typography variant='h5'>
//                    {product.price}
//                    </Typography>
//            </div>
//            <Typography variant='h2' color='textSecondary'>
//                        {product.description}
//                        </Typography>

//        </CardContent>
//        <CardActions disablespacing className={classes.cardActions}>
//            <IconButton aria-label='Add to Cart'>
//                <AddShoppingCart />
//                </IconButton>

//        </CardActions>
//    </Card>
  )
}

export default Product