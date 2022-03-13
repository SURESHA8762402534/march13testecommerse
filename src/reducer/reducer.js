

const reducer = (state, action) => {
    if(state === undefined){
        return {
            products : [],
            totalprice:0
           
        }
    }
    const product = action.payload
    switch(action.type){
        case 'ADD-TO-CART' :
            
            // state.products = product.name;
            // state.totalprice = state.totalprice + product.price
            // console.log(state.products, state.totalprice);


            if(!state.products.includes(product)) {
                state.products.push(product);
                state.totalprice = state.totalprice + product.price;
                console.log(state.products,state.totalprice)
            }
            break;
            case 'REMOVE-CART':
                if(state.products.includes(product)) {
                    const idx = state.products.indexOf(product);
                    state.products.splice(idx, 1);
                    state.totalprice = state.totalprice - product.price;
                    console.log(state.products,state.totalprice)
                }
                break;
                case 'INCREASE':
                    console.log('increse clicked');

                    const newArr = [];
                    for (let i = 0; i < state.products.length; i++) {
                      if (state.products[i].id === product.id) {
                        const newObj = {
                          id: product.id,
                          quantity: state.products[i].quantity + 1,
                        };
                        newArr.push(newObj);
                      }
                      newArr.push(state.products[i]);
                    }
              
                    state.products = newArr;
                    state.total = state.total + product.price;
              
                    break;
                    case 'CLEAR-CART':
                        state.products = [];
                        state.totalprice =0
                        break;

                default :
                break;
    }
  return {...state}
    
  
}

export default reducer