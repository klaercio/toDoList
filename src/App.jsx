import { useState } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';

function App() {

  const [task, setTask] = useState('');

  function handleNewTask() {
    event.preventDefault();
  }

  function handleSetTask() {
    const newTask = event.target.inputTask.value;
    setTask(newTask);
  }

  return (
  <>
      <Header/>
      <div className={styles.formulario}>
        <form onSubmit={handleNewTask}>
          <input name="inputTask"  className={styles.inputTask} type='text' placeholder='Adicione uma nova tarefa' value={task} onChange={handleSetTask}/>
          <button type='submit'>Criar <PlusCircle/></button>
        </form>
      </div>
  </>
  )
}

export default App
