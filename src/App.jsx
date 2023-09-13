import React from 'react';
import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar';
import Topcomponent from './components/Topcomponent';
import Card from './components/Card';
import requests from './Request';


export default function App() {

  return (
    <>
      <Navbar />
      <Topcomponent />
      <Card title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

