import React, {useState} from 'react';

import {Layout, Container, Logo, Text, Result, Button} from '../../components';

import {maps, levels} from '../../mocks/game';

const Home = () => {
  const [map, setMap] = useState();
  const [level, setLevel] = useState();
  const [show, setShow] = useState(false);
  const [preload, setPreload] = useState(false);

  const generateGame = () => {
    setPreload(true);
    setTimeout(() => {
      setShow(true);
      setMap(Math.floor(Math.random() * 15));
      setLevel(Math.floor(Math.random() * 4));
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
            {show && <Result map={maps[map]} level={levels[level]} />}
            <Button text={'sortear'} onPress={generateGame} />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
