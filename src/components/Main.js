
import Nav from "./Nav";
import Principal from "./Principal";

function Main(props) {
  return (
    <div className="Main">
      <Nav />
      <Principal body={props.body} />
    </div>
  );
}

export default Main;
