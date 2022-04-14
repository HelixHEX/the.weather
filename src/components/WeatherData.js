import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useDate, useWeather } from '../hooks';

const WeatherData = ({ zipcode }) => {
  const { date, time } = useDate();
  const { weather } = useWeather(zipcode);
  return (
    <>
      {weather.main ? (
        <Flex flexDir={['column', 'column', 'column', 'row', 'row']} zIndex={1}>
          <Text fontWeight={'600'} fontSize={80}>
            {Math.floor(weather.main.temp)}°
          </Text>
          <Flex ml={3} flexDir={'column'}>
            <Text fontSize={[50, 60, 70, 70]}>{weather.name}</Text>
            <Flex fontWeight={'200'} fontSize={25}>
              <Text>{time} -&nbsp;</Text>
              <Text>{date}</Text>
            </Flex>
          </Flex>
            <Image mt={[5, 5, 5, 0, 0]} alignSelf={['start', 'start', 'start', 'center', 'center']} w={105} h={105} rounded={100} ml={5} style={{background: 'rgb(255, 255, 255, 0.5'}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} />
        </Flex>
      ) : null}
      {weather.message ? <Text>{weather.message}</Text> : null}
    </>
  );
};

export default WeatherData;