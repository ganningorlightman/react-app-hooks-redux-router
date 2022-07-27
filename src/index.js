import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './globalStyle/normalize.css';
import './globalStyle/base.css';
import Game from './pages/Game';
import Menu from './pages/Menu';
import Error404 from './pages/Error404';
import GameProvider from './GameContext';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/game" element={<Game/>}/>
                    <Route exact path="/" element={<Menu/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
