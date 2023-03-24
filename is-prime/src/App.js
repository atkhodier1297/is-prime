import logo from './logo.svg';
import './App.css';

function App() {

  function isPrime(number) {
    if (number <= 1) {
      return false; // 1 and any number less than or equal to 1 are not prime
    }
  
    // Check for divisibility of number by all integers from 2 to the square root of number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If number is divisible by any integer from 2 to the square root of number, then it is not prime
      }
    }
  
    return true; // If number is not divisible by any integer from 2 to the square root of number, then it is prime
  }
  
  // Example usage:
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(15)); // Output: false

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        </div>
      </header>
    </div>
  );
}

export default App;
