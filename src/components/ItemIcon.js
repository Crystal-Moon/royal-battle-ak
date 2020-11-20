import { Component, createRef } from 'react';

class ItemIcon extends Component {
  constructor(){
  	super();
  	//this.iconRef = createRef();

  }

  render() {
  	const { item={} } = this.props;
  	const { name='', icon='', qlty='white' } = item;
    return <img 
    		src={icon} 
    		title={name} 
    		className={`ItemIcon ${qlty}`} 
    		
    	 
 	
    	/> ;
  }
}

export default ItemIcon;

/*
<div className={`ItemIcon ${borderItem}`}>
        <img src={ imgItem } title={ nameItem } className='icon' />
      </div>
      */