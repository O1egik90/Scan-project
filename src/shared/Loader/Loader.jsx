import styles from './Loader.module.css';

export function Loader({mode}) {
    return (
        <div className={`${styles.loader} ${mode ? styles[mode] : ''}`}>
            <img src="./loader.svg" alt="" />
        </div>
    );
}
