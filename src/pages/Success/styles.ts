import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  padding: 2.5rem 10rem;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 2.5rem 5rem;
  }

  img {
    height: 18.3125rem;
  }
`;

export const ConfirmedMessage = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 800;
    color: ${props => props.theme['yellow-dark']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin-bottom: 2.5rem;
  }
`;

export const ShippingInfo = styled.div`
  width: 32.875rem;
  border-radius: 6px 36px 6px 36px;

  background: linear-gradient(
    to right,
    ${props => props.theme['yellow']},
    ${props => props.theme['purple']}
  );
  padding: 1px;

  > div {
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['white']};
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    gap: 2rem;
  }
`;

export const ShippingLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  > div {
    padding: 0.5rem;
    /* background: ${props => props.theme['purple']}; */
    color: ${props => props.theme['white']};
    border-radius: 100%;
    display: flex;
    align-items: center;
  }

  > p {
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.3rem;

    > strong {
      font-weight: 700;
    }
  }

  .mappin {
    background: ${props => props.theme['purple']};
  }

  .timer {
    background: ${props => props.theme['yellow']};
  }

  .currency {
    background: ${props => props.theme['yellow-dark']};
  }
`;
