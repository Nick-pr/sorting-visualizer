const Slider = props => {
    return (
        <input
            type="range"
            onChange={e => {
                props.onChange(e.target.value);
            }}
            // value={props.initialValue}
            max={props.max}
            min={props.min}
        ></input>
    );
};

export default Slider;
