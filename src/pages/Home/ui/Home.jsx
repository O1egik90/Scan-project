import {HomePageStart} from '/src/widgets/HomePageStart';
import {Advantages} from '/src/widgets/Advantages';
import {Rates} from '/src/widgets/Rates';

export function Home() {
    return (
        <main id="home" className="content">
            <HomePageStart />
            <Advantages />
            <Rates />
        </main>
    );
}
