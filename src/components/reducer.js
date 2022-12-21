import oneplus from "images/oneplus.avif"

export const initialState =
{
    basket : [
        {
            id:"38643",
            title:"Oneplus",
            price:12000,
            rating:4,
            image:oneplus
        },
    ],
    user : null,
   
};
const reducer = (state,action) =>
{
    console.log(action);
    switch(action.type)
    {
    case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket,action.item],
        };
    case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        if(index >= 0)
        {
            // ite exist in basket, remove it
            newBasket.splice(index,1);

        } else{
            console.warn(
            `cant remove product (id: ${action.id})  as its not in the basket`
            );
        }
        return {...state,
            basket :newBasket};
    default :
    return state;
    }
};
export default reducer;