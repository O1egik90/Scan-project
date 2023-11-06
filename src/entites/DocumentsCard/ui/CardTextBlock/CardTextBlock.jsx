import styles from './CardTextBlock.module.css';
import {useEffect, useRef} from 'react';

export function CardTextBlock({children, document}) {
    const xml = useRef(null);
    useEffect(() => {
        xml.current.innerHTML = document;
    }, []);

    return (
        <div ref={xml} className={styles['card__text-block']}>
            {children}
        </div>
    );
}
