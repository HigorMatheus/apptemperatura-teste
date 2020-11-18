import React, { useState } from 'react';
import api from '../../services/api';

import { Container, Content, DadosLocatin } from './styles';

interface UserData {
  location: {
    latitude: number;
    longitude: number;
  };

  tempo: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };

  name: string;
}

const App: React.FC = () => {
  const [isUser, setIsUser] = useState<UserData[]>([]);

  async function local(): Promise<void> {
    navigator.geolocation.getCurrentPosition(async location => {
      const { latitude, longitude } = location.coords;

      const dataTemp = await api.get(
        `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8c1b1d849c2e4da816b9c4c820418aee`,
      );

      const { temp, temp_min, temp_max, humidity } = dataTemp.data.main;
      const data = {
        location: {
          latitude,
          longitude,
        },

        tempo: {
          temp,
          temp_min,
          temp_max,
          humidity,
        },

        name: dataTemp.data.name,
      };

      setIsUser([data]);
    });
  }
  return (
    <Container>
      <Content>
        <div>
          <h1>Saiba a temperatura de sua região atual</h1>
          <button type="button" onClick={local}>
            localizacao
          </button>
        </div>
      </Content>
      <DadosLocatin>
        {isUser.map(user => {
          return (
            <>
              <div>
                <h1>
                  localizacao:
                  {user.name}
                </h1>
                <div>
                  <span>latitude</span>
                  <strong>{user.location.latitude}</strong>
                </div>
                <div>
                  <span>longitude</span>
                  <strong>{user.location.longitude}</strong>
                </div>
              </div>
              <div>
                <h1>tempo</h1>
                <div>
                  <span>temperatura</span>
                  <strong>{user.tempo.temp}</strong>
                </div>
                <div>
                  <span>temperatura minima</span>
                  <strong>{user.tempo.temp_min}</strong>
                </div>
                <div>
                  <span>temperatura maxima</span>
                  <strong>{user.tempo.temp_max}</strong>
                </div>
                <div>
                  <span>umidade</span>
                  <strong>{user.tempo.humidity}</strong>
                </div>
              </div>
            </>
          );
        })}
      </DadosLocatin>
    </Container>
  );
};

export default App;
