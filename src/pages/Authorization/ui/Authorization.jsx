import styles from './Authorization.module.css';
import {AuthorizationImage} from './AuthorizationImage/AuthorizationImage';
import {AuthorizationForm} from '/src/features/AuthorizationForm';
import {Title} from '/src/shared';

export function Authorization() {
    return (
        <main className="content">
            <section className={styles.authorization}>
                <Title>Для оформления подписки на тариф, необходимо авторизоваться.</Title>
                <AuthorizationImage />
                <AuthorizationForm />
            </section>
        </main>
    );
}
