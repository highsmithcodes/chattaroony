import {gql, useQuery} from '@apollo/client';
import { GET_CART } from '../../graphql-operations';
import { useReactiveVar } from "@apollo/client";
import {itemsInCart} from '../../index';
import { useCallback } from 'react';



function Cart() {
    const cartItemIds = useReactiveVar(itemsInCart)
  // + vvv
  const removeFromCart = useCallback(id => {
    const remainingItems = cartItemIds.filter(item => item !== id)
    // This will trigger the re-render due to useReactiveVar
    itemsInCart(remainingItems)
  }, [cartItemIds])
  // + ^^^
  const {loading, error, data} = useQuery(GET_CART, {
    variables: {itemIds: cartItemIds},
  })
  if (loading || error) return null
  return (
    <ul>
      {// Call removeFromCart on click
      data.items.map(item => (
        <li key={item.id} onClick={() => removeFromCart(item.id)}>
          {`${item.name}...${item.price}$`}
        </li>
      ))}
    </ul>
  )

}
export default Cart;