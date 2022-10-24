import { HeaderContainer, LocationGroup, ShoppingCartGroup } from './styles';
import { NavLink } from 'react-router-dom';

import { MapPin, ShoppingCart } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

import logoCoffeDelivery from '../../assets/logocoffedelivery.svg';
import { useContext, useEffect, useState } from 'react';
import { CoffesContext } from '../../contexts/CoffesContext';

export function Header(props: any) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const { shoppingCartList } = useContext(CoffesContext);

  const shoppingCartItems =
    shoppingCartList.length > 0 ? <p>{shoppingCartList.length}</p> : '';

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeDelivery} alt="logoCoffeDelivery" />
      </NavLink>

      <nav>
        <LocationGroup>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <span className="stylesLocationCity">{props.city}</span>
        </LocationGroup>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCartGroup>
            <ShoppingCart size={22} weight="fill" />
            {shoppingCartItems}
          </ShoppingCartGroup>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
