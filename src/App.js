import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Cart  onShowCart={showCartHandler}/>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
