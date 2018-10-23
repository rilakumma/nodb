import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Image from './components/Image';
import Search from './components/Search';


class App extends Component {
  constructor(){
    super();
    this.state={
      anime: [],
      nextLink: '',
      count: 0,
      genre: 'adventure',
      favorites:[]
    }
  }

  componentDidMount(){
    axios.get('https://kitsu.io/api/edge/anime').then(res=>{
      //console.log(res.data.data[0].attributes.titles.en)
      this.setState({ 
        anime: res.data.data, 
        nextLink: res.data.links.next, 
        count: this.state.count+10 })
    })
  }

  getNextLink(){
    axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${this.state.count}`).then(res=>{
    this.setState({
      nextLink: res.data.links.next,
      anime: res.data.data,
      count: this.state.count+10
    })
    document.documentElement.scrollTop =0;
  })
  }

  addToFavorites(item){
    // axios.post('/api/favorites', {value: this.state.anime}).then(res=>{
    //   console.log(res)
    //   console.log(this.state.favorites)
    //   this.setState({
    //     favorites: res.data.data
    //   })
    // })
    // let favIndex = this.state.anime.findIndex((anime)=> anime.id ===id)
    axios.post('/api/favorites', {title: item.attributes.titles, image: item.attributes.coverImage}).then(res=>{
      console.log(res.data)
      console.log(this.state.favorites)
      this.setState({
        favorites: res.data
                    })
                  })
  }

  render() {
   
    const displayAnime = this.state.anime.length ? this.state.anime.map((item)=>{
     console.log(item)
      return(
        <h1 className ='animeList' key={item.id}>
          {item.attributes.titles.en || item.attributes.titles.en_jp}
          <br />
      <Image cover ={item.attributes.coverImage ? item.attributes.coverImage.original : 'https://cdn0.iconfinder.com/data/icons/web-development-35/64/404-error-message-server-not-found-512.png'} />
     
      <button className='fav' onClick={()=> {this.addToFavorites(item)}}>Add to Favorites</button>
        </h1>
      )
    }) : <div>Loading...</div>
    

    return (
      <div className="App">
      <h1><a href="./App.js">Anime</a></h1>
      

      <Search genre={this.state.genre} update={this.getGenre} />

      <div className='displayBox'>{displayAnime}</div>

      <button onClick={()=> this.getNextLink()}> 10 More Titles</button>

      </div>
    );
  }
}

export default App;
