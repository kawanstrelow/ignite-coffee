import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  const [userLocationByIpAdress, setUserLocationByIpAdress] = useState('');

  useEffect(() => {
    getIpData();
  }, []);

  function getIpData() {
    axios
      .get(`http://ip-api.com/json/23.112.97.179`)
      .then(ipInfo =>
        setUserLocationByIpAdress(`${ipInfo.data.city}, ${ipInfo.data.region}`)
      );
  }

  return (
    <LayoutContainer>
      <Header city={userLocationByIpAdress} />
      <Outlet />
    </LayoutContainer>
  );
}
