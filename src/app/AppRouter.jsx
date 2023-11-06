import {useContext, useEffect, useMemo} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {Home} from '../pages/Home';
import {Authorization} from '../pages/Authorization';
import {Search} from '../pages/Search';
import {SearchOutput} from '../pages/SearchOutput';
import {NotFound} from '../pages/NotFound';
import {getFromStorage} from './lib/getFromStorage';

export function AppRouter() {
    const context = useContext(GlobalStates);
    const authCompleted = context.authCompleted;
    const searchFormDataSent = context.searchFormDataSent;
    const location = useLocation();
    const navigate = useNavigate();
    const checkSearchFormSend = useMemo(() => (getFromStorage('generalSummary') ? true : false), [searchFormDataSent]);
    const access = useMemo(() => (getFromStorage('accessToken') ? true : false), [authCompleted]);
    // редирект со страницы авторизации на главную, если уже авторизовался
    // редирект со страниц поиска и вывода результатов поиска на страницу авторизации, если не авторизован
    useEffect(() => {
        if (access && location.pathname.includes('auth')) navigate('/');
        if (!access && location.pathname.includes('search')) navigate('/auth');
    }, [authCompleted]);
    // редирект со страницы результатов поиска на страницу с формой поиска, если не была отправлена форма поиска
    useEffect(() => {
        if (access && !checkSearchFormSend && location.pathname.includes('output')) navigate('/search');
    }, [searchFormDataSent]);
    // приватные и публичные страницы
    return authCompleted ? (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search-output" element={<SearchOutput />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    ) : (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/auth" element={<Authorization />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
