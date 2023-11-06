import styles from './AuthorizationImage.module.css';
import {AdaptiveImage} from '/src/shared';

export function AuthorizationImage() {
    return (
        <div className={styles.authorization__image}>
            <AdaptiveImage src="./auth-image.svg" alt="auth-image" />
        </div>
    );
}
