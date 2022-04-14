import {
  Text,
  Flex,
  Image,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import WeatherData from './components/WeatherData';
import WeatherDetail from './components/WeatherDetail';
import { useWeather } from './hooks';

function App() {
  const [zipCode, setZipCode] = useState('94901');
  const { weather } = useWeather(zipCode);
  return (
    <>
      <Flex w="100%" h="100vh">
        <Flex
          flexDir={'column'}
          justifyContent="space-between"
          zIndex={-1}
          pos="absolute"
          color="white"
          p={10}
          pl={20}
          pb={100}
          w="100%"
          h="100%"
        >
          <Image
            left={0}
            top={0}
            pos="absolute"
            zIndex={-1}
            src={require('./assets/images/main.jpg')}
            w="100%"
            h="100vh"
          />
          <Text fontWeight={'600'} fontSize={25}>
            the.weather
          </Text>
          <WeatherData zipcode={zipCode} />
        </Flex>
        <Flex
          // style={{ background: 'rgb(0, 0, 0, 0.7)' }}
          right={0}
          bg="gray.900"
          pos="absolute"
          w="30%"
          h="100%"
          // filter={'blur(2px)'}
        />
        <Flex flexDir={'column'} w="30%" h="100%" right={0} pos="absolute">
          <Flex h={85} pl={10} pr={10} w="100%" justifyContent="space-between">
            <Input
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              color="white"
              w="100%"
              alignSelf={'flex-end'}
              variant={'flushed'}
              placeholder="Enter Location"
            />
          </Flex>
          <Flex
            flexDir={'column'}
            color="white"
            pl={10}
            mt={20}
            mr={10}
            pr={10}
            w="100%"
            h="100%"
          >
            <Text fontWeight={'700'}>Weather Details</Text>
            <Flex flexDir='column' w="100%" mt={5} fontWeight="500">
              {weather.main ? (
                <>
                 <WeatherDetail
                    title={'Feels like'}
                    data={`${Math.floor(weather.main.feels_like)}%`}
                  />
                  <WeatherDetail
                    title={'Humidity'}
                    data={`${weather.main.humidity}%`}
                  />
                  <WeatherDetail
                    title={'Wind'}
                    data={`${Math.floor(weather.wind.speed)} mph`}
                  />
                </>
              ) : null}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
