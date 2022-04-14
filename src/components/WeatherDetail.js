import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const WeatherDetail = ({title, data}) => {
  return (
    <>
      <Flex mt={2} w={'100%'}  justifyContent={'space-between'}>
        <Text fontSize={20} fontWeight={'200'}>{title}</Text>
        <Text fontSize={20} fontWeight={'400'}>{data}</Text>
      </Flex>
    </>
  );
};

export default WeatherDetail;
