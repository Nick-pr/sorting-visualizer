import { useState, useEffect, useRef } from 'react';
import Controls from './components/Controls.jsx';
import Slider from './components/Slider.jsx';
import Board from './components/Board.jsx';
import bubbleSort from './algos/bubbleSort.js';
import { useSortingVisualizer } from './hooks/index.js';
import { randArray } from './utils/random.js';
import './colors.css';

const App = () => {
    const randomData = randArray(45, 0, 99);

    const [baseArray, setBaseArray] = useState(randomData);
    const { nodes, start, stop, sorting, setDisplaySize } =
        useSortingVisualizer(baseArray, bubbleSort);

    const handleRandomize = () => {
        const newBaseArray = randArray(45, 0, 99);
        setBaseArray(newBaseArray);
    };

    return (
        <>
            <Controls id="app-controls">
                <Slider
                    onChange={setDisplaySize}
                    min={1}
                    max={baseArray.length}
                    initialValue={Math.floor(baseArray.length / 2)}
                    disabled={sorting}
                />
                <button onClick={handleRandomize}>Randomize</button>
                <button onClick={start}>Sort</button>
                <button onClick={stop}>Stop</button>
            </Controls>
            <Board id="app-board" nodes={nodes} />
        </>
    );
};

export default App;
