import React, {Component} from 'react';
import axios from 'axios';
import Image from './Image';

class Search extends Component {
    constructor(){
        super();
        this.state = {
          genre: []
        }
        //this.getGenre = this.getGenre.bind(this);
      }

      getAdventure(){
        axios.get(`https://kitsu.io/api/edge/anime?filter[genres]=adventure`).then(res=>{
            console.log(res.data.data)
            this.setState({
                genre: res.data.data
            })
        })
    }

    getComedy(){
        axios.get(`https://kitsu.io/api/edge/anime?filter[genres]=comedy`).then(res=>{
            console.log(res.data.data)
            this.setState({
                genre: res.data.data
            })
        })
    }

    getThriller(){
        axios.get(`https://kitsu.io/api/edge/anime?filter[genres]=thriller`).then(res=>{
            console.log(res.data.data)
            this.setState({
                genre: res.data.data
            })
        })
    }

    render(){
        const showGenre = this.state.genre.length ? this.state.genre.map((item)=>{
            return(
                <h1 className ='animeList' key={item.id}>
                {item.attributes.titles.en || item.attributes.titles.en_jp}
                <br />
                <Image cover ={item.attributes.coverImage ? item.attributes.coverImage.original : 'https://cdn0.iconfinder.com/data/icons/web-development-35/64/404-error-message-server-not-found-512.png'} />
                </h1>
            )
        }) : <div>Loading....</div>
        return(
            <div>
                <div className='genreBox'>
                <button onClick={()=> this.getAdventure()}>Get Adventure</button>
                <button onClick={()=> this.getComedy()}>Get Comedy</button>
                <button onClick={()=> this.getThriller()}>Get Thriller</button>
                {showGenre}
                </div>
            </div>
        )
    }
}
export default Search;
