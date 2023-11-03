import './Hello.css';
const Hello = ({name,isLoggedIn}) => {
  return (
    <div className="mainDiv">
      {isLoggedIn ?<h1 className="text">Hello this is me {name}</h1>:<h1>Hello Guest</h1>}
    </div>
  );
}

export default Hello;