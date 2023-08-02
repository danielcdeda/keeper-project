import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import notes from './notes';

const newNotes = notes.map((note) => note);

console.log(newNotes)

function App() {
  return (<div>
    <Header />
    <Note title="Opa" content="Funcionando" />
    <Footer />
  </div>);
}

export default App;
