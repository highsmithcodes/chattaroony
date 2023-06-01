import { gql, useQuery  } from '@apollo/client';
import { GET_CART_ITEMS } from '../../graphql-operations';


function Cart() {
  const { loading, error, data } = useQuery(GET_CART_ITEMS);

  if(loading) return "Loading Cart!";
  if(error) return <p>Error: {error.message}</p>

  return (
    <>
      <h4>Cart</h4>
      {data && data.cartItems.length === 0 ? (
        <p>There are no items in your cart!</p>
      ) : (
        <ul>
          {data && data.cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  )

}

export default Cart;