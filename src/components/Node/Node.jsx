import './Node.css';
import { useRef } from 'react';
const Stick = props => {
    const ref = useRef();
    return (
        <div
            ref={ref}
            className="Stick"
            value={props.value}
            style={{
                height: props.value,
                backgroundColor: props.active ? 'blue' : 'white',
            }}
        ></div>
    );
};

export default Stick;
