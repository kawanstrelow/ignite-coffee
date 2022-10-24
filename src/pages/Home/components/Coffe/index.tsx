import {
  ButtonHandleQuantify,
  CoffeContainer,
  InfoGroup,
  PriceGroup,
  Quantify,
  ShoppingIcon,
} from './styles';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffesContext } from '../../../../contexts/CoffesContext';
import { v4 as uuidv4 } from 'uuid';

interface CoffeProps {
  id?: string;
  coffeType: string;
  title: string;
  subtitle: string;
  price: number;
  img: string;
}

export function Coffe({
  id,
  coffeType,
  title,
  subtitle,
  price,
  img,
}: CoffeProps) {
  const [quantifyCoffee, setQuantifyCoffee] = useState(1);

  const { shoppingCartList, updateShoppingCartList } =
    useContext(CoffesContext);

  function handlerQuantifyCoffeMinus() {
    if (quantifyCoffee > 1) {
      const newQuantify = quantifyCoffee - 1;
      setQuantifyCoffee(newQuantify);
    }
  }

  function handlerQuantifyCoffeMore() {
    const newQuantify = quantifyCoffee + 1;
    setQuantifyCoffee(newQuantify);
  }

  function addCoffeInShoppingCart() {
    const newShoppingCartList = {
      id: uuidv4(),
      coffeType,
      title,
      subtitle,
      price,
      quantifyCoffee,
      img,
    };
    updateShoppingCartList(newShoppingCartList);
  }

  return (
    <CoffeContainer>
      <InfoGroup>
        <img src={img} alt="" />
        <span>{coffeType}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </InfoGroup>

      <PriceGroup>
        <span>
          R$ <span>{price.toFixed(2)}</span>
        </span>
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
          <ShoppingIcon>
            <ShoppingCartSimple
              size={16}
              weight="fill"
              onClick={addCoffeInShoppingCart}
            />
          </ShoppingIcon>
        </div>
      </PriceGroup>
    </CoffeContainer>
  );
}
