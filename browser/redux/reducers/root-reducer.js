import { SET_LYRICS } from '../../react/constants'

const initialState = {text: ''}

export default function reducer(state = initialState, action) {
    if (action.type===SET_LYRICS) return Object.assign({}, state, {text: action.lyric})
    else return state
}