export const initialState = {
    basket:[{
        id:"12321341",
        title:"The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback",
        price:11.96,
        rating:5,
        image:
          "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png",
        },
        {
            id:"12321341",
            title:"The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback",
            price:11.96,
            rating:5,
            image:
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png",
            },
    ],
    user: null,
};

export const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
         
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id ===action.id);

            if(index >=0){
                //item exist in basket remove it
                newBasket.splice(index,1);
            }

            else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its`
                )
            };

            return{
                ...state,
            basket: newBasket,
            };
            default:
                return state;
    }
};

export default reducer;