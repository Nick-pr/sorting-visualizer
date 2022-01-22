import './Controls.css'
const Controls = props => {
    return (
        <div className='controls' id={props.id}>
            {props.children}
        </div>
    );
};

export default Controls;
