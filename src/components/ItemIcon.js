import { Component } from 'react';

class ItemIcon extends Component {
  render() {
  	const item = this.props.item || {};
  	const { name='', icon='', qlty='white' } = item;
    return <img src={ icon } title={ name } className={`ItemIcon ${qlty}`} /> ;
  }
}

export default ItemIcon;

/*
<div className={`ItemIcon ${borderItem}`}>
        <img src={ imgItem } title={ nameItem } className='icon' />
      </div>
      */