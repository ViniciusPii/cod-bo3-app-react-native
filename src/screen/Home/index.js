import React, {useState} from 'react';

import {Layout, Container, Logo, Text, Result, Button} from '../../components';

import gameDraw from '../../mocks/game';

const Home = () => {
  const [show, setShow] = useState(false);
  const [preload, setPreload] = useState(false);
  const [game, setGame] = useState({map: null, level: null});

  const generateGame = () => {
    const currentGame = {
      map: gameDraw.maps[Math.floor(Math.random() * gameDraw.maps.length)],
      level:
        gameDraw.levels[Math.floor(Math.random() * gameDraw.levels.length)],
    };
    setPreload(true);
    setTimeout(() => {
      setShow(true);
      setGame(currentGame);
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
