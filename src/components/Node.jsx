import { useRef } from 'react';
import styles from '../styles/Node.module.css';
const Node = props => {
    const { active , sorted } = props;
    return (
        <div className={styles.container}>
            {props.value}
            <div
                className={styles.stick}
                value={props.value}
                style={{
                    height: (props.value + 2) * 3,
                    backgroundColor: active ? 'cyan':
                                    sorted ? 'orange': 'white',
                }}
            ></div>
        </div>
    );
};

export default Node;
