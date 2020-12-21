
function ItemIcon(props) {
  
  const { item={} } = props;
  const { name='', icon='', qlty='white' } = item;
  return (
    <img 
      src={icon} 
      title={name} 
      className={`ItemIcon ${qlty}`} 
      alt={name}
    />
  );
}

export default ItemIcon;
