import React from 'react';
import ReactDOM from 'react-dom/client';
import './toDo/reset.css';
import './toDo/index.css';
import ToDo from './toDo/ToDo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);

