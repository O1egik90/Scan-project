import styles from './Documents.module.css';
import {useGetDocumentCards} from '../model/useGetDocumentCards';
import {Subtitle, Button, Loader} from '/src/shared/';
import {DocumentsCard} from '/src/entites/DocumentsCard';

export function Documents() {
    const [documents, documentCards, limit, setLimit, loading] = useGetDocumentCards();

    return (
        <section className={styles['documents']}>
            {documents.length > 0 && (
                <>
                    <Subtitle>Список документов</Subtitle>
                    <div className={styles['documents__card-list']}>
                        {documentCards.map((document) => (
                            <DocumentsCard data={document} key={document.id} />
                        ))}
                    </div>
                </>
            )}
            <div className={styles['documents__btn-wrapper']}>
                {!loading && documents.length > limit + 10 && (
                    <Button onClick={() => setLimit(limit + 10)}>Показать больше</Button>
                )}
                {loading && (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        Загрузка... <Loader mode="big" />
                    </div>
                )}
            </div>
        </section>
    );
}
