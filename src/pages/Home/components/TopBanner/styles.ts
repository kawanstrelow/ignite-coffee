import styled from 'styled-components';

export const TopBannerContainer = styled.div`
  display: flex;
  padding: 5.75rem 10rem;

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 2rem 5rem;
  }

  img {
    height: 22.5rem;
    width: 29.75rem;

    @media screen and (min-width: 768px) and (max-width: 1080px) {
      height: 15rem;
      margin-top: 2rem;
    }
  }

  gap: 3.5rem;
  background-color: ${props => props.theme['background']};
`;

export const AdsGroup = styled.div`
  display: flex;
  width: 36rem;

  gap: 2.5rem;
`;

export const AdsIcon = styled.div`
  padding: 8px;
  border-radius: 100%;
  display: flex;
  align-items: center;

  color: ${props => props.theme['background']};
  background: ${props => props.color};
`;

export const AdsPoints = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-start;
  gap: 0.75rem;

  margin-bottom: 1.25rem;

  p {
    color: ${props => props.theme['base-text']};
    font-weight: 400;
    font-size: 1rem;
    font-style: normal;
    line-height: 130%;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.25rem;
`;

export const UpTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 3.9rem;
    font-weight: 800;
    color: ${props => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 400;
    color: ${props => props.theme['base-title']};
  }
`;
