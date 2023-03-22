import './App.scss';

import love from '../src/kiss.mp3'

function App() {

  const Sound = (() =>{
    new Audio(love).play();
  })

  return (
    <div className="App">
      <h2>Нажми на конверт, чтобы его открыть. Alexiusmur</h2>
      <div className="container" onClick={Sound}>
        <div className="envelope"></div>
        <div className="card">
          <h1 className="message">С сердечным приветом и массой наилучших пожеланий <br/> Сегодня, я твой Валентин</h1>
          <div className="heart"></div>
        </div>
        <div className="cover"></div>
        <div className="lid"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default App;
