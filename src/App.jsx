import { useState, useEffect, useRef } from 'react';
import Controls from './components/Controls.jsx';
import Slider from './components/Slider.jsx';
import Board from './components/Board.jsx';
import { randBetween, sleep } from './utils.js';
import bubbleSort from './algos/bubbleSort.js';

const App = () => {
    const MAX_DATA_SIZE = 45;
    const MAX_DATA_HEIGHT = 99;

    const [data, setData] = useState([]);
    const [dataSize, setDataSize] = useState();
    const [sizedData, setSizedData] = useState([]);
    const [sortAlgo, setSortAlgo] = useState();
    const [sortIter, setSortIter] = useState();

    const randomizeData = () => {
        const result = [];
        for (let i = 0; i < MAX_DATA_SIZE; i++) {
            const value = randBetween(0, MAX_DATA_HEIGHT);
            result.push({
                value,
                key: i,
                active: false,
            });
        }
        setData(result);
        setSortIter();
    };

    const handleSortClick = () => {
        const sort = async iter => {
            for (let data of iter) {
                await sleep(1);
                setSizedData([...data]);
            }
        };
        const iter = bubbleSort(sizedData);
        sort(iter);
    };

    const resizeData = () => {
        const sizedData = data.slice(0, dataSize);
        setSizedData(sizedData);
    };

    useEffect(randomizeData, []);
    useEffect(resizeData, [dataSize, data]);

    return (
        <div className="App">
            <Controls id="app-controls">
                <Slider
                    initialValue={MAX_DATA_SIZE / 2}
                    onChange={setDataSize}
                    max={MAX_DATA_SIZE}
                    min={10}
                />
                <button onClick={randomizeData}>Randomize Data</button>
                <button onClick={handleSortClick}>Sort!</button>
            </Controls>
            <Board id="app-board" data={sizedData} />
        </div>
    );
};

export default App;
