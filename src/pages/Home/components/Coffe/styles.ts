import styled from 'styled-components';

export const CoffeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    position: absolute;
    margin-top: calc(0px - 1.25rem);
    height: 7.5rem;
  }

  > span {
    margin-top: 7rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.8125rem;
  }

  > h1 {
    margin: 1rem 1.25rem 0rem 1.25rem;

    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 700;
    color: ${props => props.theme['base-subtitle']};
  }

  > p {
    margin: 0.5rem 1.25rem 0rem 1.25rem;

    text-align: center;
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
  }
`;

export const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding: 0 1.5rem;
  width: 100%;
  gap: 0.5rem;

  > span {
    font-size: 0.875rem;
    line-height: 1.1375rem;
    color: ${props => props.theme['base-text']};

    > span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 1.95rem;
      font-weight: 800;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Quantify = styled.div`
  display: flex;
  width: 4.5rem;
  height: 2.375rem;
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

export const ShoppingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  cursor: pointer;

  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['base-card']};

  &:hover {
    background: ${props => props.theme['purple']};
  }
`;

export const ButtonHandleQuantify = styled.div`
  padding: 0.25rem;

  &:hover {
    color: ${props => props.theme['purple-dark']};
  }
`;
