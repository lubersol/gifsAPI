import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter";


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App Gifs</h1>
        <section className="Enlaces">
          <Link to='/gif/panda'>Pandas</Link>
        </section>
        <section className="enlaces">
          <Link to='/gif/mapache'>Mapaches</Link>
        </section>
        <section>
          <Link to='/gif/perro'>Perros</Link>
        </section>
        <section>
          <Link to='/gif/gato'>Gatos</Link>
        </section>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  )
}

