import React from 'react'
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
    id,
    title,
    price,
    description,
    image,
}) {
    
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            image,

        };

        // Push item back to Basket
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }   

    return (
        <div className="grid grid-cols-5">
            <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain" 
            />
            {/*Middle* */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                </div>
                <p className="text-xs mt-2 mb-2 line-calmp-3">{description}</p>
                <Currency quantity={price * 72} currency="INR" />

            </div>
            {/*Right add two button* */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
