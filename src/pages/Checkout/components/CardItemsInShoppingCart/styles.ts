import styled from 'styled-components';

export const SelectedCoffesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.9375rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.4625rem;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const SelectedCoffesCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 44px 6px 44px;
  padding: 1rem 2.5rem 2.5rem 2.5rem;

  background: ${props => props.theme['base-card']};
`;

export const CoffeOnTheShoppingCart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 23rem;
  padding: 1.5rem 0.25rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 4rem;
      margin-right: 1.25rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > h3 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
      }

      > div {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

  > span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${props => props.theme['base-text']};
  }
`;

export const Quantify = styled.div`
  display: flex;
  width: 4.5rem;
  height: 2rem;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['purple']};
  cursor: pointer;

  > span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }
`;

export const PaymentButton = styled.button`
  height: 3.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 0;
  gap: 0.75rem;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;

  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['purple']};
  > span {
    color: ${props => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`;

export const RemoveFromShoppingCartButton = styled(PaymentButton)`
  height: 2rem;
  padding: 0 0.5rem 0 0.5rem;

  > span {
    color: ${props => props.theme['base-text']};
  }

  &:hover {
    background: ${props => props.theme['base-hover']};
    color: ${props => props.theme['purple-dark']};

    > span {
      color: ${props => props.theme['base-subtitle']};
    }
  }
`;

export const TotalShoppingCart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.1375rem;
      color: ${props => props.theme['base-text']};
    }

    > span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3rem;
      color: ${props => props.theme['base-text']};
    }

    > h3 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }

    > h2 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
`;

export const ConfirmOrderButton = styled.button`
  height: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;

  background: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']};
  > span {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.4rem;
  }
`;

export const ButtonHandleQuantify = styled.div`
  padding: 0.25rem;

  &:hover {
    color: ${props => props.theme['purple-dark']};
  }
`;
