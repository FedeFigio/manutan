
import './App.css';
import Dati from './components/Dati';
import Title from './components/Title';



function App() {
  return (
    <div className="App flex justify-center">
      <div className='max-w-5xl w-full p-5 '>
        <header>
          <Title />
        </header>

        <main className='py-10'>
          <Dati />
        </main>

        <footer></footer>
      </div>
    </div>

  );
}

export default App;
