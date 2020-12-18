
import { Component } from 'react';
import db from '../util/db';
import '../assets/css/news.css';

class News extends Component{
  constructor(){
    super();
    this.state = { news: [] }
  }

  componentDidMount(){
    let toDate = date =>''+(date.getDate()<10?'0':'')+date.getDate() + '-'
    	+ (date.getMonth()+1<10?'0':'')+(date.getMonth()+1) + '-'
    	+ date.getFullYear();


  	db.getNews().then(news=>
  		this.setState({ news: news.map(({ date, body })=>({ date: toDate(new Date(date)), body })) })
    );
  }

  render(){
    return(this.state.news.length>0?
      <div className="News">
      	<h2 className="h2">Noticias</h2>
    	{
    	this.state.news.map((n,i)=><div className="noticia" key={i}>
    	  <span>{n.date}</span>
    	  <p>{n.body}</p>		
    	</div>)
    	}		
      </div>
    : 
      <div></div>)
  }
}

export default News;