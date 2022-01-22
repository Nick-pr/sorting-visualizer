const Slider = props => {
    return (
        <input
            type="range"
            onChange={props.onChange}
            value={props.initialValue}
        ></input>
    );
};

export default Slider;
