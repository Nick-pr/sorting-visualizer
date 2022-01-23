import './Board.css';
import React from 'react';

const Board = ({children, ...props}) => {
    return (
        <div id={props.id} className="Board">
            {children}
        </div>
    );
};

export default Board;
