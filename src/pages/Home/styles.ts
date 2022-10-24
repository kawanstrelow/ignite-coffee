import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.375rem;
  padding: 2rem 10rem;

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 2rem 5rem;
  }

  > p {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
  }
`;

export const CoffesContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 1.25rem;
`;
