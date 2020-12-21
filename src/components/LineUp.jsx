
function LineUp(props) {
  const { x='' } = props;
  return(
  		<line x1={x +'%'} y1="13%" x2="50%" y2="50%" >
            <animate attributeName="x1" from="50%" to={x +'%'} dur="0.15s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="13%" dur="0.15s" repeatCount="1" />
            <animate attributeName="stroke" from="#333" to="#D4AF37" dur="0.15s" repeatCount="1" fill="freeze" />
        </line>
  );
}

export default LineUp;