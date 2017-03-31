import lyricsReducer, {initialLyricsState} from '../redux/reducers/lyrics-reducer'
import playerReducer, {initialPlayerState} from '../redux/reducers/player-reducer'

import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


const store = createStore(combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
}), applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));


export default store;