import {useState} from 'react';
const Slider = props => {
    const {initialValue}=props
    const [value,setValue] = useState(initialValue)
    return (
        <input
            type="range"
            onChange={e => {
                setValue(e.target.value)
                props.onChange(e.target.value);
            }}
            value={value}
            max={props.max}
            min={props.min}
            disabled={props.disabled}
        ></input>
    );
};

Slider.defaultProps = {
    min: 0,
    max: 100,
    initialValue: 50,
    disabled: false,
}

export default Slider;
