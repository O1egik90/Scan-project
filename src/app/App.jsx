import './App.css';
import {GlobalStatesProvider} from './model/GlobalStatesProvider';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppRouter} from './AppRouter';
import {Header} from '../widgets/Header';
import {Footer} from '../widgets/Footer';

export default function App() {
    return (
        <GlobalStatesProvider>
            <Router>
                <div className="wrapper">
                    <Header />
                    <AppRouter />
                    <Footer />
                </div>
            </Router>
        </GlobalStatesProvider>
    );
}
