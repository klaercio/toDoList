import { useState } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import empty from './assets/empty.svg';
import Task from './components/Task';
import { v4 } from 'uuid';

function App() {

  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);
  const [concluidas, setConcluidas] = useState(0);

  function handleNewTask() {
    event.preventDefault();
    setListTask([...listTask, {
      id: v4(),
      content: task,
      checked: false,
    }
    ]);
    setTask('');
  }

  function handleSetTask() {
    const newTask = event.target.value;
    setTask(newTask);
  }

  function handleSwitchChecked(id, checado) {

    if (checado) 
      setConcluidas(atual => atual - 1);
    else 
      setConcluidas(atual => atual + 1);
    

    const newList = listTask.map(task => {
      if (task.id === id) {
        const newTask = {
          id: id,
          content: task.content,
          checked: !task.checked,
        }
        return newTask;
      }
      return task;
    })

    setListTask(newList);
  }

  function handleDeleteTask(id, checked) {

    if(checked) 
      setConcluidas(atual => atual - 1);

    const newList = listTask.filter(task => (
        task.id !== id
    ))

    setListTask(newList);
  }

  return (
  <>
      <Header/>
      <div className={styles.formulario}>
        <form onSubmit={handleNewTask}>
          <input name="inputTask"  className={styles.inputTask} type='text' placeholder='Adicione uma nova tarefa'  required value={task} onChange={handleSetTask}/>
          <button type='submit'>Criar <PlusCircle size={16}/></button>
        </form>
      </div>
      <div className={styles.content}>
          <header className={styles.tarefas}>
            <span><p className={styles.tarefasCriadas}>Tarefas Criadas</p><p className={styles.contador}>{listTask.length}</p></span>
            <span><p className={styles.tarefasConcluidas}>Concluídas</p><p className={styles.contador}>{`${concluidas} de ${listTask.length}`}</p></span>
          </header>
          <div className={styles.tasksContent}>
          {
           listTask.length === 0 ?
                  <><img src={empty}/><span><p>Você ainda não tem tarefas cadastradas</p><p>Crie tarefas e organize seus itens a fazer</p></span></>
           : 
                listTask.map(itemTask => (<Task 
                                              key={itemTask.id} 
                                              id={itemTask.id} 
                                              content={itemTask.content} 
                                              checked={itemTask.checked} 
                                              handleSwitchChecked={handleSwitchChecked}
                                              handleDeleteTask={handleDeleteTask}
                                           />
                                          )) 
          } 
          </div>
      </div>
  </>
  )
}

export default App
