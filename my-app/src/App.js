import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const testText = '변수로 텍스트 출력하기'
  return (
    <div className="App">
      <header className="App-header">
        <p>
        { testText }
        </p>
       < Button />
      </header>
    </div>
  );
}

export default App;
