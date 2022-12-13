import Checked from '../assets/checked.svg';
import UnChecked from '../assets/unchecked.svg';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export default function Task({id, content, checked, handleSwitchChecked}) {
    return <>
        <div>
            <img src={checked? Checked: UnChecked}/>
            <span>{content}</span>
            <Trash size={24} className={styles.iconTrash}/>
        </div>
    </>
}

/* onClick={() => handleSwitchChecked(id)} */