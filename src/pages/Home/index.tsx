import { data } from '../../data/data';
import { Coffe } from './components/Coffe';
import { TopBanner } from './components/TopBanner';
import { CoffesContainers, HomeContainer } from './styles';

export function Home() {
  return (
    <div>
      <TopBanner />
      <HomeContainer>
        <p>Nossos cafés</p>
        <CoffesContainers>
          {data.map(coffe => (
            <Coffe
              key={coffe.title}
              coffeType={coffe.type}
              title={coffe.title}
              subtitle={coffe.subtitle}
              price={coffe.price}
              img={coffe.img}
            />
          ))}
        </CoffesContainers>
      </HomeContainer>
    </div>
  );
}
