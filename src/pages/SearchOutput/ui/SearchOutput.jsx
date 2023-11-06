import {SearchOutputDescription} from './SearchOutputDescription/SearchOutputDescription';
import {GeneralSummary} from '/src/widgets/GeneralSummary';
import {Documents} from '/src/widgets/Documents';

export function SearchOutput() {
    return (
        <main id="search-output" className="content">
            <SearchOutputDescription />
            <GeneralSummary />
            <Documents />
        </main>
    );
}
