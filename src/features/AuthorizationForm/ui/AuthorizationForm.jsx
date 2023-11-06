import styles from './AuthorizationForm.module.css';
import {useEffect} from 'react';
import {Input, Label, Button, FormRow, Hint} from '/src/shared';
import {SocialLink} from './SocialLink/SocialLink';
import {FormLink} from './FormLink/FormLink';
import {useCheckInputValues} from '../model/useCheckInputValues';
import {useSetAuth} from '../api/useSetAuth';

export function AuthorizationForm() {
    let [login, handleLogin, pass, handlePass, buttonDisabled] = useCheckInputValues(); // упр. инпуты
    let [handleAuthorization, error, removeError] = useSetAuth(login, pass); // запрос на авторизацию
    useEffect(removeError, [login, pass]); // ф-я убирает сообщение об ошибке (закеширована)

    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.authorization__form} action="#">
            <FormRow mode="links">
                <FormLink mode="active">Войти</FormLink>
                <FormLink mode="disable">Зарегистрироваться</FormLink>
            </FormRow>
            <FormRow>
                <Label elemId="login" type="small">
                    Логин или номер телефона:
                </Label>
                <Input onChange={handleLogin} id="login" name="login" value={login} mode={error ? 'error' : 'auth'} />
                <Hint show={error ? 'error' : ''}>Введите корректные данные</Hint>
            </FormRow>
            <FormRow>
                <Label elemId="pass" type="small">
                    Пароль:
                </Label>
                <Input
                    onChange={handlePass}
                    type="password"
                    id="pass"
                    name="pass"
                    value={pass}
                    mode={error ? 'error' : 'auth'}
                />
                <Hint show={error ? 'error' : ''}>Неправильный пароль</Hint>
            </FormRow>
            <FormRow mode="buttons">
                <Button onClick={handleAuthorization} status={buttonDisabled ? 'btn-disabled' : ''} mode="auth">
                    Войти
                </Button>
                <FormLink mode="small">Восстановить пароль</FormLink>
            </FormRow>
            <Label elemId="login" mode="text" type="small">
                Войти через:
            </Label>
            <FormRow mode="social">
                <SocialLink href="#" src="./google-icon.svg" alt="google" />
                <SocialLink href="#" src="./facebook-icon.svg" alt="facebook" />
                <SocialLink href="#" src="./yandex-icon.svg" alt="yandex" />
            </FormRow>
        </form>
    );
}
