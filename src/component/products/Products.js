import React from "react";
import { Grid } from '@mui/material';
import Product from "./product/Product";

const products = [
    {id:0,name:'Rainbow cake', description:'Delicious and Tasty Cakes'   , price:200, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPxEXan8K8oqdx-tpNRQjWc6l4LIny-YaHw&usqp=CAU"},
    {id:1,name:'Birthday Cake', description:'Delicious and Tasty Cakes' ,   price:400, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp313tCQ5uA0tYIfr8q9WiULaoDCFy0xLusw&usqp=CAU"},
    {id:2,name:'Doremon cvream cake', description:'Delicious and Tasty Cakes' ,   price:500, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLIfXfpyckqKICMsKCuRqai2cvCscCX0I9A&usqp=CAU"},
    {id:3,name:'Special Birthday Cake', description:'Delicious and Tasty Cakes' ,   price:450, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm84z6HRV5n1dyVOVBp01Sg_YN6cB0Dln_Q&usqp=CAU"},
    {id:4,name:'Mini chocolate cake', description:'Delicious and Tasty Cakes' ,   price:410, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCih_-XG3r6UCYW4IFs91y2IoSncM_nvY0Q&usqp=CAU"},
    {id:5,name:'Chocolate venilla', description:'Delicious and Tasty Cakes' ,   price:600, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_s7EKmPS-mfk8g2KDVJncEerUbUhLkSy1Q&usqp=CAU"},
    {id:6,name:'Opera cake', description:'Delicious and Tasty Cakes' ,   price:499, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWnTRTINX_J8_YGcOsMjG7Gapt4Ea0M_xUw&usqp=CAU"},
    {id:7,name:'Chocolate stuffele', description:'Delicious and Tasty Cakes' ,   price:899, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzURwWril9gxvd_x5sYtkJ85nrJv6tNNMRqQ&usqp=CAU"},
    {id:8,name:'Venilla creame chease', description:'Delicious and Tasty Cakes' ,   price:499, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTW2cdv-a9yLG2WFKCPvjRV9cz6oClnW_XHQ&usqp=CAU"},
    {id:9,name:'Fun Birthday cake', description:'Delicious and Tasty Cakes' ,   price:499, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsGhRb8dnvWueEj1N2P6cvPrwaqF60sQjKQ&usqp=CAU"},
    {id:10,name:'Chocolate gems cake',description:'Delicious and Tasty Cakes' ,   price:454, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKToVDy1GzpLmSOpK7wrPN60PXS6B-WEVp5g&usqp=CAU"},
    {id:11,name:'Carrote cake',description:'Delicious and Tasty Cakes' ,   price:854, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07u50vgN-QK4z4EGg__42iKm9IYa9qXQJZw&usqp=CAU"},
    
];

const Products = () => {
  return (
    

    <main>
        <Grid container justify = 'center' spacing = {1}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                    </Grid>
            ))}
            </Grid>
    </main>
  )
}

export default Products