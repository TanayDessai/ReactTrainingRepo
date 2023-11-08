import logo from './logo.svg';
import './App.css';
import WithHooksForms from './components/WithHookForms';
import WithoutHookForm from './components/WithoutHookForm';

function App() {
  return (
    <div className="main-section">
      <div className="section-1">
        <WithHooksForms />
        {/* <WithoutHookForm/> */}
      </div>
    </div>
  );
}

export default App;
