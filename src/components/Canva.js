
import { Component, createRef } from 'react';
import {Event} from '../util/Event';



class Canva extends Component {
  constructor(){
	super();
	this.refCanva = createRef();
	this.resizeComponent=this.resizeComponent.bind(this);
	this.doneResizing=this.doneResizing.bind(this)
	this.drawing = this.drawing.bind(this);
	this.drawLine= this.drawLine.bind(this);
	this.state = {
	  	height: 200,
	  	width: 300,
	  	made_by: [],
	  	mat_for: [],
	  	doneSize: this.doneResizing
	}
	Event.on('zoom', this.resizeComponent);
	window.onresize= this.resizeComponent;
  }

  componentDidMount(){
		//this.setState({ ...this.props })
		//this.drawing();
		//this.resizeComponent()
	this.doneResizing();
  }

  resizeComponent(){
    window.clearTimeout(this.state.doneSize);
    this.setState({ doneSize: window.setTimeout(this.doneResizing, 120) })
  }

  doneResizing(){
  	let size = this.refCanva.current.getBoundingClientRect();
	this.setState({ width: size.width, height: size.height }, this.drawing);
  }

  drawing(){
	let cnv = this.refCanva.current.childNodes[0];
	let ctx = cnv.getContext('2d');
	ctx.fillStyle='#333';
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	ctx.strokeStyle='red';
    ctx.lineWidth = 2;

    let xM = cnv.width/2;
    let yM = cnv.height/2;
    let { made_by, mat_for } = this.props;

    ctx.moveTo(xM,yM);

	made_by.forEach((_,i)=>{ 
	  setTimeout(()=> this.drawLine(ctx,{ 
	    x1: cnv.width/(made_by.length+1) * (i+1) , 
		x2: xM, 
		y1: 85*cnv.height/100, 
		y2: yM 
	  }))
	});

	mat_for.forEach((x,i)=>{ 
	  setTimeout(()=> this.drawLine(ctx,{ 
		x1: xM, 
		x2: cnv.width/(mat_for.length+1) * (i+1), 
		y1: yM, 
		y2: 5*cnv.height/100
	  }))
	});
  }

  drawLine(ctx,{ x1, x2, y1, y2 }){
	let zt=100;
	for(let z=1; z<=zt; z++){
	  setTimeout(()=>{
		let xa=x1 + ((x2-x1)/zt*z);
        let ya=y1 + ((y2-y1)/zt*z);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(xa, ya);
        ctx.stroke();
      },z*5);
    }
  }

  render(){
	return(
	  	<div className="Vector svg-cointeiner" 
	  		 ref={this.refCanva}><canvas 
	  		 	   width={this.state.width} 
	  	  		   height={this.state.height}></canvas></div>
	  )
  }
}

export default Canva;