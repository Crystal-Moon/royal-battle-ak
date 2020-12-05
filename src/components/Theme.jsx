import { Component } from 'react';
import { Helmet } from 'react-helmet';
import db from '../util/db';

class Theme extends Component{
  constructor(){
	super();
	this.handlerTheme = this.handlerTheme.bind(this)
	this.state = {
	  themes: [],
	  select: 0
	}
  }

  componentDidMount(){
  	db.getThemes().then(themes=> this.setState({ themes }))
  }

  handlerTheme(e){
  console.log('el target', )
	//let theme = e.target
    //let theme=e.target.value
  this.setState({ select: e.target.value })
	
  }

  render(){ 
    return (
      <div className='Theme' style={{display: this.props.parent=='app'? 'block':'none' }} >
      	<Helmet>
      		<link rel="stylesheet" type="text/css" href={`/assets/css/themes/${this.state.select}.css`} />
      	</Helmet>
      	
      	<label htmlFor="themes">Tema</label>
    	<select name='themes' className='Theme' onChange={this.handlerTheme}>
    	  {
    	  	this.state.themes.map((t,k)=><option key={k} value={t.name}>{t.displayName}</option>)
    	  }
        </select>
        
  	</div>
    )
  }
}

export default Theme;