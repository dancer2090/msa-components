import Box from '../Box';
import React from 'react';
import Loader from '../../../assets/loader.gif';
import { LoaderBox } from './styles';

export const BoxPreloader = () => {
  <LoaderBox align="center" justify="center">
    <img src={Loader} />
  </LoaderBox>;
};

const Preloader = () => {
  return (
    <Box align="center" height="200px" justify="center">
      <img src={Loader} />
    </Box>
  );
};
export default Preloader;
