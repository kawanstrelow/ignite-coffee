import { useContext, useEffect, useState } from 'react';
import { CoffesContext } from '../../contexts/CoffesContext';
import { CardItemInCart } from './components/CardItemsInShoppingCart';
import { useForm, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  RemoveFromShoppingCartButton,
  TotalShoppingCart,
} from './components/CardItemsInShoppingCart/styles';

import {
  BaseInput,
  BaseInputMinor,
  BaseInputUF,
  CheckoutContainers,
  ChoosePaymentMethod,
  CoffeOnTheShoppingCart,
  CompleteAdressContainer,
  CompletePaymentMethodContainer,
  FormAdress,
  HeaderFormAdress,
  HeaderFormPayment,
  Quantify,
  SelectedCoffesCheckout,
  SelectedCoffesContainer,
  ConfirmOrderButton,
  PaymentSelectLabel,
} from './styles';

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';

const newFormValidationSchema = zod.object({
  cep: zod.number(),
  rua: zod.string(),
  numero: zod.number().min(2, 'Número Incorreto'),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string().min(2, 'Digite apenas a sigla. Ex: Sp'),
  paymentMethod: zod.string(),
});

export function Checkout() {
  const {
    successCheckoutInfos,
    cleanShoppingCartList,
    shoppingCartList,
    updateSuccessCheckoutInfo,
  } = useContext(CoffesContext);
  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      rua: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentMethod: '',
    },
  });
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const shipping = 3.5;

  useEffect(() => {
    setTotal(calcTotal());
  }, [shoppingCartList]);

  function calcTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCartList.length; i++) {
      total += shoppingCartList[i].price * shoppingCartList[i].quantifyCoffee;
    }
    return total;
  }

  function handleSendForm(data: any) {
    updateSuccessCheckoutInfo(data);

    setTimeout(() => {
      reset();
      cleanShoppingCartList();
      navigate('/success');
    }, 2000);
  }

  const paymentMethod = watch('paymentMethod');

  return (
    <CheckoutContainers onSubmit={handleSubmit(handleSendForm)} action="">
      <div>
        <CompleteAdressContainer>
          <p>Complete seu pedido</p>
          <FormAdress>
            <HeaderFormAdress>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido.</p>
              </div>
            </HeaderFormAdress>
            <BaseInputMinor
              id="cep"
              placeholder="CEP"
              {...register('cep', { valueAsNumber: true })}
            ></BaseInputMinor>
            <BaseInput
              id="rua"
              placeholder="Rua"
              {...register('rua')}
            ></BaseInput>
            <div>
              <BaseInputMinor
                id="numero"
                placeholder="Número"
                {...register('numero', { valueAsNumber: true })}
              ></BaseInputMinor>
              <BaseInput
                id="complemento"
                placeholder="Complemento"
                {...register('complemento')}
              ></BaseInput>
            </div>
            <div>
              <BaseInputMinor
                id="bairro"
                placeholder="Bairro"
                {...register('bairro')}
              ></BaseInputMinor>
              <BaseInput
                id="cidade"
                placeholder="Cidade"
                {...register('cidade')}
              ></BaseInput>
              <BaseInputUF
                id="uf"
                placeholder="UF"
                {...register('uf')}
              ></BaseInputUF>
            </div>
          </FormAdress>
        </CompleteAdressContainer>

        <CompletePaymentMethodContainer>
          <HeaderFormPayment>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderFormPayment>
          <ChoosePaymentMethod>
            <PaymentSelectLabel
              className={
                paymentMethod === 'Cartão de crédito' ? 'active' : 'disabled'
              }
            >
              <input
                type="radio"
                value="Cartão de crédito"
                {...register('paymentMethod')}
              />
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentSelectLabel>
            <PaymentSelectLabel
              className={
                paymentMethod === 'Cartão de Débito' ? 'active' : 'disabled'
              }
            >
              <input
                type="radio"
                value="Cartão de Débito"
                {...register('paymentMethod')}
              />
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentSelectLabel>
            <PaymentSelectLabel
              className={paymentMethod === 'Dinheiro' ? 'active' : 'disabled'}
            >
              <input
                type="radio"
                value="Dinheiro"
                {...register('paymentMethod')}
              />
              <Money size={16} />
              <span>DINHEIRO</span>
            </PaymentSelectLabel>
          </ChoosePaymentMethod>
        </CompletePaymentMethodContainer>
      </div>
      <SelectedCoffesContainer>
        <p>Cafés selecionados</p>
        <SelectedCoffesCheckout>
          {shoppingCartList.map(item => (
            <CardItemInCart
              key={item.id!}
              id={item.id!}
              title={item.title}
              price={item.price}
              img={item.img}
              quantifyCoffee={item.quantifyCoffee}
            />
          ))}

          <TotalShoppingCart>
            <div>
              <p>Total de items</p>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
            <div>
              <h3>Total</h3>
              <h2>R$ {(total + shipping).toFixed(2)}</h2>
            </div>

            <ConfirmOrderButton type="submit">
              <span>CONFIRMAR PEDIDO</span>
            </ConfirmOrderButton>
          </TotalShoppingCart>
        </SelectedCoffesCheckout>
      </SelectedCoffesContainer>
    </CheckoutContainers>
  );
}
