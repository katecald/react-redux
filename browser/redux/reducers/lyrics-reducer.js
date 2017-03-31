import { SET_LYRICS } from '../../react/constants'

export const initialLyricsState = {text: ''}

export default function reducer(state = initialLyricsState, action) {
     switch (action.type) {
    case SET_LYRICS: 
       return Object.assign({}, state, { text: action.lyric });
    default: 
       return state;
     }
}

