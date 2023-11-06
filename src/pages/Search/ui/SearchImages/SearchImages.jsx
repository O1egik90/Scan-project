import styles from './SearchImages.module.css';

export function SearchImages() {
    return (
        <div className={styles.search__images}>
            <img className={styles.document} src="./document.svg" alt="document" />
            <img className={styles.folders} src="./folders.svg" alt="folders" />
        </div>
    );
}
