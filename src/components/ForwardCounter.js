import React, { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = (props) => {
  const counter = useCounter();

  return <Card> {counter} </Card>;
};

export default ForwardCounter;
