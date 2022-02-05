import React from 'react';
import Node from './Node.jsx';
import styles from '../styles/Board.module.css';

const Board = props => {
    const { size, data } = props;
    // console.log(data);
    return (
        <div id={props.id} className={styles.container}>
            {data.map((node, index) => {
                return (
                    <Node
                        value={node.value}
                        active={node.active}
                        key={index}
                        sorted={node.sorted}
                    />
                );
            })}
        </div>
    );
};

export default Board;
