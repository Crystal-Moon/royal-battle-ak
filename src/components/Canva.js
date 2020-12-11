
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

	//var id;
//$(window).resize(function() {
    	window.clearTimeout(this.state.doneSize);
    	this.setState({ doneSize: setTimeout(this.doneResizing, 400) })

	}

	doneResizing(){
  		let size = this.refCanva.current.getBoundingClientRect();
		this.setState({ width: size.width, height: size.height }, this.drawing);
		//this.drawing();
	}

	drawing(){
	//	console.log('las props en draw', this.props)
	//	console.log('las state en draw', this.state)
	
		let cnv = this.refCanva.current.childNodes[0];
		let ctx = cnv.getContext('2d');
		ctx.fillStyle='#333'
		//console.log('cnv', cnv, cnv.width, cnv.height)
		//ctx.fillStyle='blue'
		ctx.fillRect(0, 0, cnv.width, cnv.height);


		ctx.strokeStyle='red';
    	ctx.lineWidth = 3;

   // let xTotal = c.width; 
 //   let yTotal = c.height;
 //   let y5per = c.height/20 // 5%
//let y95per= c.height - (c.height/20);
    	let xM = cnv.width/2;
    	let yM = cnv.height/2;

    	ctx.moveTo(xM,yM);
//console.log('cnv',cnv,'m', xM, yM)


		let { made_by: BY, mat_for: FOR } = this.props;

		//console.log('by y for'. BY, FOR)

		BY.forEach((_,i)=>{ setTimeout(()=>{
		  this.drawLine(ctx,{ 
			x1: cnv.width/(BY.length+1) * (i+1), 
			x2: xM, 
			y1: 85*cnv.height/100, 
			y2: yM 
		  })
		})});
			
		/*	let x1=cnv.width/(BY.length+1) * (i+1),
        	x2= xM,
        	y1= 85*c.height/100,
        	y2= yM;
			*/
		
		FOR.forEach((x,i)=> { setTimeout(()=>{
		//	console.log('en el setFOR')
		  this.drawLine(ctx,{ 
			x1: xM, 
			x2: cnv.width/(FOR.length+1) * (i+1), 
			y1: yM, 
			y2: 15*cnv.height/100
		  })
		})});
			
/*
    by.forEach((_,i)=> {
        let x1=c.width/(by.length+1) * (i+1),
        x2= xM,
        y1= 85*c.height/100,
        y2= yM;
      //  console.log('a draw',x1,x2,y1,y2)
        setTimeout(()=>{ 
            drawLine(ctx,{ x1, x2, y1, y2 },{ xM, yM },'by')
        },10)
    }
    )
    
    forr.forEach((_,i)=> {
        let x1=xM,
        x2= c.width/(forr.length+1) * (i+1),
        y1= yM,
        y2= 15*c.height/100;
      //  console.log('a draw',x1,x2,y1,y2)
        setTimeout(()=>{ 
            drawLine(ctx,{ x1, x2, y1, y2 },{ xM, yM },'by')
        },10)
    }
    )
*/

	}

	drawLine(ctx,{ x1, x2, y1, y2 }){
	//	console.log('en el for')
		let zt=100;
		for (let z=1; z<=zt; z++){
		  setTimeout(()=>{
	//	  	console.log('en el set')
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            let xa=x1 + ((x2-x1)/zt * z);
            let ya=y1 + ((y2-y1)/zt * z);
                //console.log('linea',z,'de',l,'x1',x1,'y1',y1,'x2',x2,'y2',y2,'xa',xa,'xy',ya)
            ctx.lineTo(xa, ya);
            ctx.stroke();
          },z*5);
        }
	}

	render(){
	  //const { made_by=[], mat_for=[] } = this.props;
	  return(
	  	<div className="Vector svg-cointeiner" 
	  		 ref={this.refCanva}><canvas 
	  		 	   width={this.state.width} 
	  	  		   height={this.state.height}></canvas></div>
	  )
	}
}

export default Canva;