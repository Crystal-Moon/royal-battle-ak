
function LineDown(props) {
  const { x='' } = props;
  return(
  		<line x1="50%" y1="50%" y2="87%" x2={x +'%'}>
            <animate attributeName="x2" from="50%" to={x +'%'} dur="0.15s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="87%" dur="0.15s" repeatCount="1" />
            <animate attributeName="stroke" from="#333" to="#D4AF37" dur="0.15s" repeatCount="1" fill="freeze" />
      </line> 
  );
}

export default LineDown;