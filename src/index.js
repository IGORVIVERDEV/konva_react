import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text } from 'react-konva';

import Topbar from './topbar1'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { MetaMaskProvider } from "metamask-react";
import Metalogin from './metamasklogin';
import { useMetaMask } from "metamask-react";

import PersonList from './axiosData3';
import ComplexList from './complexList1';

ReactDOM.render( 
<React.StrictMode>
<MetaMaskProvider>

<table border='1' style={{width:900}}>
  <tr>
    <td><Topbar /></td>
    <td>Tobias</td>
    <td rowspan='3'>
      <Metalogin />
      <hr />
      <ComplexList />
      <hr />
      <PersonList />
    </td>
  </tr>
  <tr>
    <td><App /></td>
    <td>12</td>
 
  </tr>
    <tr>
    <td>13</td>
    <td>14</td>
 
  </tr>
</table>

 
  
  
</MetaMaskProvider>
</React.StrictMode>, document.getElementById('root'));

reportWebVitals();
