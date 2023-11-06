import styles from './SliderButton.module.css';

export function SliderButton({mode, ...props}) {
    return <div className={`${styles['slider-button']} ${styles[mode]}`} {...props}></div>;
}
