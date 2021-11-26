import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


function start() {

  return (
    <Link to='/quiz'>
    <Button title="퀴즈 시작"/>
    </Link>
  );
}

export default start;
