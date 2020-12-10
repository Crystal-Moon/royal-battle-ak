
import { Component, createRef } from 'react';
import {Event} from '../util/Event';



class Canva extends Component {
	constructor(){
	  super();
	  this.refCanva = createRef();
	  this.resizeComponent=this.resizeComponent.bind(this);
	  this.drawing = this.drawing.bind(this);
	  this.drawLine= this.drawLine.bind(this);
	  this.state = {
	  	height: 200,
	  	width: 300,
	  	made_by: [],
	  	mat_for: []
	  }
	  Event.on('zoom', this.resizeComponent);
	  window.onresize= this.resizeComponent;
	}

	componentDidMount(){
		this.setState({ ...this.props })
	}

	resizeComponent(){
		let size = this.refCanva.getBoundingClientRect();
		this.setState({ width: size.width, height: size.height })
		this.darwing();
	}

	drawing(){
		let cnv = this.refCanva.current.childNodes[0];
		let ctx = cnv.getContext('2d');
		ctx.fillStyle='#333'
		ctx.fillRect(0, 0, cnv.width, cnv.height);

		let { made_by: BY, mat_for: FOR } = this.state;
		BY.forEach((x,i)=>
			this.drawLine(ctx,{ x1: 50, x2: 100/(BY.length+1)*(i+1), y1:50, y2: 5 }) );
		FOR.forEach((x,i)=>
			this.drawLine(ctx,{ x1: 100/(FOR.length+1)*(i+1), x2: 50, y1:95, y2: 50 }) );
	}

	drawLine(ctx,{ x1, x2, y1, y2 }){
		for (let z=1; z<=10; z++){
			setTimeout(()=>{
				ctx.lineTo(x1, y1, x1/100, y2);
				ctx.stroke();
			},z*50)
		}

	/*
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle='white'
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.moveTo(0,0);
		ctx.strokeStyle='red'
		ctx.lineTo(20,10);
		//ctx.stroke();
		ctx.strokeStyle='blue'
		ctx.lineTo(50,100);
		//ctx.stroke();
		ctx.strokeStyle='green'
		ctx.lineTo(200,100);
		ctx.lineWidth = 5;
		ctx.stroke();
	*/
	}

	render(){
	  //const { made_by=[], mat_for=[] } = this.props;
	  return(
	  	<div className="Vector" 
	  		 ref={this.refCanva}><canvas 
	  		 	   width={this.state.width} 
	  	  		   height={this.state.height}></canvas></div>
	  )
	}
}