import Rocket from '../assets/rocket.svg';
import styles from './Header.module.css';

export default function Header() {
    return <>
        <header className={styles.cabecalho}>
            <img src={Rocket} alt="logo" />
            <span><p className={styles.to}>to</p><p className={styles.do}>do</p></span>
        </header>
    </>
}