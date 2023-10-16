import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const Tarefas = ['Estudar', 'academia', 'dieta','projeto']

function App() {
  return (
    <ul>{ Tarefas.map(Tarefas => Task(Tarefas)) }</ul>
  );
}

export default App;
