import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeaction, actionincrease, actionclear } from '../../action/action';


const Cart = () => {

    const data = useSelector((storevalue)=>{
        return storevalue.products
    })

    // const [store, storefunc] = useState()

    // const clicking = (value)=>{
    //     storefunc(value)
    //     console.log(store);
    // }

    const dispatchfunc = useDispatch();

    const removefunc = ()=>{
        dispatchfunc(removeaction())
      
    }

    const increase = (value)=>{
        dispatchfunc(actionincrease(value))
    }
    const clearfunc = (value)=>{
        dispatchfunc(actionclear(value))
    }

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-3">
                <button className="btn-danger text-light " onClick={()=>clearfunc()}>Clear Your cart</button>
                {data.map((item,index) => {
                    return(
                        <div key={index} className="card">
                            <div className="card-header">
                                <h5 className="text-warning">{item.products.name}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="text-center">{item.totalprice}</p>
                                    </div>
                                    <div className="footer">
                                        <button className="btn-primary text-danger" onClick={()=>removefunc(item)}>Remove From Cart</button>
                                        <button className="btn-secondary" onClick={()=>increase(item)}>Increse Count</button>
                                        </div>
                            </div>
                    )
                })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart