import styles from '../styles/Controls.module.css';
const Controls = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

export default Controls;
