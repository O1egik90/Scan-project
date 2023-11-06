import {AdaptiveImage} from '/src/shared';

export function NotFound() {
    return (
        <main className="content">
            <div style={{display: 'grid', minHeight: '67vh', alignItems: 'center', justifyItems: 'center'}}>
                <div style={{position: 'relative', width: '500px', minHeight: '300px', margin: '0 auto'}}>
                    <AdaptiveImage src="./404.gif" alt="not-found" />
                </div>
            </div>
        </main>
    );
}
