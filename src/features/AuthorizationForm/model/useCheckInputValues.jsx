import {useState, useEffect} from 'react';

export function useCheckInputValues() {
    let [login, setLogin] = useState('');
    let [pass, setPass] = useState('');
    let [buttonDisabled, setButtonDisabled] = useState(true);
    // управляет состоянием кнопки
    useEffect(() => (login !== '' && pass !== '' ? setButtonDisabled(false) : setButtonDisabled(true)), [login, pass]);
    // делам инпуты управляемыми
    const handleLogin = (e) => setLogin((login = e.target.value));
    const handlePass = (e) => setPass((pass = e.target.value));

    return [login, handleLogin, pass, handlePass, buttonDisabled];
}
