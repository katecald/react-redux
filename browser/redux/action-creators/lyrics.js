import { SET_LYRICS } from '../../react/constants'

export const setLyrics = (text) => {
    return {
        type: SET_LYRICS,
        lyric: text
    }
}