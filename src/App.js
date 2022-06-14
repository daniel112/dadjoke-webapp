import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { HomeScreen } from './screens/HomeScreen';
import { Navigationbar } from './components/NavigationBar';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box minH={'100vh'}>
        <Navigationbar />

        <HomeScreen />
      </Box>
    </ChakraProvider>
  );
};

export default App;
