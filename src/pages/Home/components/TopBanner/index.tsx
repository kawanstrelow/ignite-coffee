import axios from 'axios';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useEffect, useState } from 'react';
import CoffeImg from '../../../../assets/coffetopbannerhome.svg';
import { defaultTheme } from '../../../../styles/themes/default';
import {
  AdsGroup,
  AdsIcon,
  AdsPoints,
  LeftSide,
  TopBannerContainer,
  UpTextBox,
} from './styles';

export function TopBanner() {
  return (
    <TopBannerContainer>
      <LeftSide>
        <UpTextBox>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </UpTextBox>
        <AdsGroup>
          <div>
            <AdsPoints>
              <AdsIcon color={defaultTheme['yellow-dark']}>
                <ShoppingCart size={16} weight="fill" />
              </AdsIcon>
              <p>Compra simples e segura</p>
            </AdsPoints>
            <AdsPoints>
              <AdsIcon color={defaultTheme['yellow']}>
                <Timer size={16} weight="fill" />
              </AdsIcon>
              <p>Entrega rápida e rastreada</p>
            </AdsPoints>
          </div>
          <div>
            <AdsPoints>
              <AdsIcon color={defaultTheme['base-text']}>
                <Package size={16} weight="fill" />
              </AdsIcon>
              <p>Embalagem mantém o café intacto</p>
            </AdsPoints>
            <AdsPoints>
              <AdsIcon color={defaultTheme['purple']}>
                <Coffee size={16} weight="fill" />
              </AdsIcon>
              <p>O café chega fresquinho até você</p>
            </AdsPoints>
          </div>
        </AdsGroup>
      </LeftSide>
      <img src={CoffeImg} alt="CoffeImg" />
    </TopBannerContainer>
  );
}
