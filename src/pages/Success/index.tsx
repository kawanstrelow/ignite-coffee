import {
  ConfirmedMessage,
  ShippingInfo,
  ShippingLine,
  SuccessContainer,
} from './styles';

import IlustrationImg from '../../assets/illustrationsuccesspage.png';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { CoffesContext } from '../../contexts/CoffesContext';

export function Success() {
  const { successCheckoutInfos, updateSuccessCheckoutInfo } =
    useContext(CoffesContext);

  return (
    <SuccessContainer>
      <ConfirmedMessage>
        <h1>Uhu! Pedido confirmado!</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <ShippingInfo>
          <div>
            <ShippingLine>
              <div className="mappin">
                <MapPin size={16} weight="fill" />
              </div>
              <p>
                Entrega em <strong>{successCheckoutInfos.rua}</strong>
                <br></br>
                {successCheckoutInfos.bairro} - {successCheckoutInfos.cidade},{' '}
                {successCheckoutInfos.uf}
              </p>
            </ShippingLine>
            <ShippingLine>
              <div className="timer">
                <Timer size={16} weight="fill" />
              </div>
              <p>
                Previsão de entrega<br></br>
                <strong>20 min - 30 min</strong>
              </p>
            </ShippingLine>
            <ShippingLine>
              <div className="currency">
                <CurrencyDollar size={16} />
              </div>
              <p>
                Pagamento na entrega<br></br>
                <strong>{successCheckoutInfos.paymentMethod}</strong>
              </p>
            </ShippingLine>
          </div>
        </ShippingInfo>
      </ConfirmedMessage>
      <img src={IlustrationImg} alt="Ilustração" />
    </SuccessContainer>
  );
}
