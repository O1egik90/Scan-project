import styles from './AdaptiveImage.module.css';

export function AdaptiveImage({...props}) {
    return <img className={styles['adaptive-image']} {...props} />;
}
