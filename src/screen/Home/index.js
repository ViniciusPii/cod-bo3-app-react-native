import React, {useState} from 'react';

import {Layout, Container, Logo, Text, Result, Button} from '../../components';

import gameDraw from '../../mocks/game';

import {randomGame} from '../../Utils/sortRandom';

const Home = () => {
  const [show, setShow] = useState(false);
  const [preload, setPreload] = useState(false);
  const [game, setGame] = useState({map: null, level: null});

  const generateGame = () => {
    setPreload(true);
    setTimeout(() => {
      setShow(true);
      setGame({
        map: gameDraw.maps[randomGame(gameDraw.maps)],
        level: gameDraw.levels[randomGame(gameDraw.levels)],
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
