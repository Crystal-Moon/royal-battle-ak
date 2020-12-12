
import ItemIcon from './ItemIcon';

function Hover(props) {
  const { item={} } = props;
  return( 
      <div className="Hover" >
    	  <div className="item-head">
            <span>
                <ItemIcon item={ item } />
            </span>
            <span className={`item-name ${item.qlty}`}>{ item.name }</span>
        </div>  
        <div className="item-body">
            <hr />
            <p className="stat">{ item.desc }</p>
            <hr />
        </div>
    </div>
  );
}

export default Hover;
