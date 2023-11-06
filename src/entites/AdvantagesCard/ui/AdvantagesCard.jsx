import styles from './AdvantagesCard.module.css';
import {AdvantagesCardIcon} from './AdvantagesCardIcon/AdvantagesCardIcon';
import {Text} from '/src/shared';

export function AdvantagesCard({alt, src, text}) {
    return (
        <div className={styles['advantages-card']}>
            <AdvantagesCardIcon src={src} alt={alt} />
            <Text mode="medium">{text}</Text>
        </div>
    );
}
