import Checked from '../assets/checked.svg';
import UnChecked from '../assets/unchecked.svg';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export default function Task({id, content, checked, handleSwitchChecked, handleDeleteTask}) {
    return <>
        <div className={styles.task}>
            <button className={styles.onChecked} onClick={() => handleSwitchChecked(id, checked)}><img src={checked? Checked: UnChecked}/></button>
            <span className={checked? styles.checked: ''}>{content}</span>
            <Trash size={24} className={styles.iconTrash} onClick={() => handleDeleteTask(id, checked)}/>
        </div>
    </>
}

/* onClick={() => handleSwitchChecked(id)} */