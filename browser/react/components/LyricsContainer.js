import React, { Component } from "react"
import store from '../store'
import { setLyrics, fetchLyrics } from "../../redux/action-creators/lyrics"
import Lyrics from '../components/Lyrics';
import axios from "axios"

export default class LyricsContainer extends Component {
    constructor() {
        super()
        this.state = Object.assign({
            artistQuery: "",
            songQuery: ""
        }, store.getState());
        this.setArtist = this.setArtist.bind(this);
        this.setSong = this.setSong.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    setArtist(artist) {
        this.setState({ artistQuery: artist });
    }

    setSong(song) {
        this.setState({ songQuery: song });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.artistQuery && this.state.songQuery) {
            store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
        }
    }

    render() {
        return (
            <Lyrics
                text={this.state.text}
                setArtist={this.setArtist}
                setSong={this.setSong}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit}
            />
        )
    }

}