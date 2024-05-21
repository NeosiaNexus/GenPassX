import styles from './Head.module.scss';

export default function Head() {
    return (
        <div className={styles.main}>
            <h1>GenPass<span className={styles.importantLetter}>X</span></h1>
            <h3>Rapide, sûr, simple.</h3>
        </div>
    )
}