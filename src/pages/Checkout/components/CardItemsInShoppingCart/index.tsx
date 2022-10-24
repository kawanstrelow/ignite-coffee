import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { CoffesContext } from '../../../../contexts/CoffesContext';
import {
  ButtonHandleQuantify,
  CoffeOnTheShoppingCart,
  Quantify,
  RemoveFromShoppingCartButton,
} from './styles';

export interface CoffeDataProps {
  id: string;
  title: string;
  price: number;
  img: string;
  quantifyCoffee: number;
}

export function CardItemInCart({
  id,
  title,
  price,
  img,
  quantifyCoffee,
}: CoffeDataProps) {
  const {
    shoppingCartList,
    updateQuantifyShoppingCartList,
    removeCoffeFromShoppingCart,
  } = useContext(CoffesContext);

  useEffect(() => {}, [shoppingCartList]);

  function handlerQuantifyCoffeMinus() {
    if (quantifyCoffee > 1) {
      const newQuantify = quantifyCoffee - 1;
      const newShoppingCartList = {
        id,
        title,
        price,
        quantifyCoffee: newQuantify,
        img,
      };
      updateQuantifyShoppingCartList(newShoppingCartList);
    }
  }

  function handlerQuantifyCoffeMore() {
    const newQuantify = quantifyCoffee + 1;
    const newShoppingCartList = {
      id,
      title,
      price,
      quantifyCoffee: newQuantify,
      img,
    };
    updateQuantifyShoppingCartList(newShoppingCartList);
  }

  function removeCoffeFromCart() {
    removeCoffeFromShoppingCart(id);
  }

  return (
    <CoffeOnTheShoppingCart>
      <div>
        <img src={img} alt="" />
        <div>
          <h3>{title}</h3>
          <div>
            <Quantify>
              <ButtonHandleQuantify onClick={handlerQuantifyCoffeMinus}>
                <Minus size={14} weight="bold" />
              </ButtonHandleQuantify>
              <span>{quantifyCoffee}</span>
              <ButtonHandleQuantify onClick={handlerQuantifyCoffeMore}>
                <Plus size={14} weight="bold" />
              </ButtonHandleQuantify>
            </Quantify>
            <RemoveFromShoppingCartButton onClick={removeCoffeFromCart}>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveFromShoppingCartButton>
          </div>
        </div>
      </div>
      <span>R$ {(price * quantifyCoffee).toFixed(2)}</span>
    </CoffeOnTheShoppingCart>
  );
}
