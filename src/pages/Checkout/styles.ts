import styled from 'styled-components';

export const CheckoutContainers = styled.form`
  padding: 2.5rem 10rem;
  display: flex;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 2.5rem 5rem;
  }
`;

export const CompleteAdressContainer = styled.div`
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

export const FormAdress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};

  > div {
    display: flex;
    gap: 0.75rem;
  }
`;

const HeaderFormBase = styled.div`
  display: flex;
  color: ${props => props.theme['yellow-dark']};
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;

    > h3 {
      color: ${props => props.theme['base-subtitle']};
      font-size: 1rem;
      line-height: 1.3rem;
    }

    > p {
      color: ${props => props.theme['base-text']};
      font-size: 0.875rem;
      line-height: 1.1375rem;
    }
  }
`;

export const HeaderFormAdress = styled(HeaderFormBase)`
  color: ${props => props.theme['yellow-dark']};
`;

export const HeaderFormPayment = styled(HeaderFormBase)`
  color: ${props => props.theme['purple']};
`;

export const BaseInput = styled.input`
  background: ${props => props.theme['base-input']};
  height: 2.625rem;
  border: 0;
  border-radius: 4px;
  padding: 0.75rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  font-style: normal;
  flex: 1;

  color: ${props => props.theme['base-text']};

  &:focus {
    box-shadow: none;

    border: 1px solid ${props => props.theme['yellow-dark']};
  }

  &:active {
    box-shadow: none;
    border-color: ${props => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`;

export const BaseInputMinor = styled(BaseInput)`
  width: 12.5rem;
  flex: 0;
`;

export const BaseInputUF = styled(BaseInputMinor)`
  width: 3.75rem;
  flex: 0;
`;

export const CompletePaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  background: ${props => props.theme['base-card']};
  padding: 2.5rem;
  gap: 2rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.4625rem;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const ChoosePaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  > input {
  }
`;

export const PaymentSelectLabel = styled.label`
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

  > input[type='radio'] {
    display: none;
  }

  &.active {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple']};
  }

  &:not(.active) {
    &:hover {
      background: ${props => props.theme['base-hover']};
    }
  }
`;

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

  > span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
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
  cursor: pointer;

  background: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']};

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }

  > span {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.4rem;
  }
`;
