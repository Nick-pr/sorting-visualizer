import styles from '../styles/Node.module.css';
const Node = props => {
    const { active, sorted, value } = props;

    const height = (value + 2) * 3;
    const classes = [
        styles.component,
        active ? styles.active : styles.inactive,
        sorted ? styles.sorted : styles.unsorted,
    ].join(' ');

    return (
        <div className={classes}>
            <p className={styles.value}>{props.value}</p>
            <div
                className={styles.bar}
                value={props.value}
                style={{ height }}
            ></div>
        </div>
    );
};

export default Node;
