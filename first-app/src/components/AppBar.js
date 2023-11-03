import './AppBar.css';
const AppBar = ({ appName,buttonNames }) => {
  return (
    <header className="app-bar">
      <h1 className="app-name">{appName}</h1>
      <ul>
        {buttonNames.map((buttonNames, index) => (
          <button key={index}>{buttonNames}</button>
        ))}
      </ul>
    </header>
  );
};

export default AppBar;