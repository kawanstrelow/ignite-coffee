import { createContext, ReactNode, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface CoffeData {
  id?: string;
  coffeType?: string;
  title: string;
  subtitle?: string;
  price: number;
  img: string;
  quantifyCoffee: number;
}

export interface CheckoutInfoProps {
  bairro: string;
  cep: number;
  cidade: string;
  complemento: string;
  numero: number;
  paymentMethod: string;
  rua: string;
  uf: string;
}

interface CoffeContextType {
  updateShoppingCartList: (data: CoffeData) => void;
  cleanShoppingCartList: () => void;
  updateQuantifyShoppingCartList: (data: CoffeData) => void;
  removeCoffeFromShoppingCart: (data: string) => void;
  updateSuccessCheckoutInfo: (data: CheckoutInfoProps) => void;
  shoppingCartList: CoffeData[];
  successCheckoutInfos: CheckoutInfoProps;
}

interface CoffeContextProviderProps {
  children: ReactNode;
}

export const CoffesContext = createContext({} as CoffeContextType);

export function CoffesContextProvider({ children }: CoffeContextProviderProps) {
  const [shoppingCartList, setShoppingCartList] = useState<CoffeData[]>([]);
  const [successCheckoutInfos, setSuccessCheckoutInfos] =
    useState<CheckoutInfoProps>({
      bairro: '',
      cep: 0,
      cidade: '',
      complemento: '',
      numero: 0,
      paymentMethod: '',
      rua: '',
      uf: '',
    });

  function updateShoppingCartList(data: CoffeData) {
    const newData = [...shoppingCartList, data];
    setShoppingCartList(newData);
  }

  function cleanShoppingCartList() {
    const newData: SetStateAction<CoffeData[]> = [];
    setShoppingCartList(newData);
  }

  function updateQuantifyShoppingCartList(data: CoffeData) {
    const newData = shoppingCartList.map(item => {
      if (item.id === data.id) {
        const refreshedItem = {
          id: item.id,
          coffeType: item.coffeType,
          title: item.title,
          subtitle: item.subtitle,
          price: item.price,
          img: item.img,
          quantifyCoffee: data.quantifyCoffee,
        };
        return refreshedItem;
      } else {
        return item;
      }
    });
    setShoppingCartList(newData);
  }

  function removeCoffeFromShoppingCart(data: string) {
    const newData = shoppingCartList.filter(item => item.id !== data);
    setShoppingCartList(newData);
  }

  function updateSuccessCheckoutInfo(data: CheckoutInfoProps) {
    console.log('Dentro da página CoffesContext', data);

    setSuccessCheckoutInfos(data);
  }

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(cyclesState);

  //   localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON);
  // }, [cyclesState]);

  return (
    <CoffesContext.Provider
      value={{
        shoppingCartList,
        successCheckoutInfos,

        updateShoppingCartList,
        cleanShoppingCartList,
        updateQuantifyShoppingCartList,
        removeCoffeFromShoppingCart,
        updateSuccessCheckoutInfo,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
}
