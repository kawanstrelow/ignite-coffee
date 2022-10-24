import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 2rem 5rem;
  }

  background-color: ${props => props.theme['background']};

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const LocationGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  border-radius: 6px;
`;

export const ShoppingCartGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  padding: 0.5rem;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border-radius: 6px;

  > p {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: calc(0px - 9.5px);
    top: calc(0px - 9.5px);

    font-size: 0.75rem;
    line-height: 0.975rem;

    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['yellow-dark']};

    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }
`;
