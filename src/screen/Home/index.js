import React, {useState} from 'react';

import {Layout, Container, Logo, Text, Result, Button} from '../../components';

import {randomGame} from '../../Utils/randomlyDraw';

import mockApi from '../../services/mockApi';

const Home = () => {
  const [show, setShow] = useState(false);
  const [preload, setPreload] = useState(false);
  const [game, setGame] = useState({map: null, level: null});

  const generateGame = async () => {
    setPreload(true);

    const response = await mockApi.get('/drawGame');

    const {levels, maps} = response.data[0];

    setTimeout(() => {
      setShow(true);
      setGame({
        map: maps[randomGame(maps)],
        level: levels[randomGame(levels)],
      });
      setPreload(false);
    }, 1000);
  };

  return (
    <Layout>
      <Container>
        {preload ? (
          <Text text="?" size={150} />
        ) : (
          <>
            <Logo />
            {show && <Result map={game.map} level={game.level} />}
            <Button text={'sortear'} onPress={generateGame} />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
