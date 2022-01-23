import './App.css';
import { useState, useEffect, useRef } from 'react';
import Controls from './components/Controls/Controls.jsx';
import Slider from './components/Slider/Slider.jsx';
import Board from './components/Board/Board.jsx';
import Node from './components/Node/Node.jsx';
import { randBetween, sleep } from './utils.js';

const App = () => {
    const MAX_DATA_SIZE = 300;
    const MAX_DATA_HEIGHT = 500;

    const [data, setData] = useState();
    const [dataSize, setDataSize] = useState([]);
    const [sizedData, setSizedData] = useState([]);
    const [sortAlgo, setSortAlgo] = useState();

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
        console.log(result);
        setData(result);
    };

    const sizeData = () => {
        const sizedData = data.slice(dataSize * -1);
        setSizedData(sizedData);
    };

    const updateBoard = () => setSizedData([...sizedData]);

    const sort = async () => {
        let unsortedLength = sizedData.length;

        const swap = (i1, i2) => {
            const temp = sizedData[i1].value;
            sizedData[i1].value = sizedData[i2].value;
            sizedData[i2].value = temp;
        };
        while (unsortedLength >= 2) {
            await sleep(20);
            for (let i = 0; i < unsortedLength - 1; i++) {
                const left = sizedData[i];
                const right = sizedData[i + 1];

                left.active = true;
                right.active = true;


                if (left.value > right.value) swap(i, i + 1);

                left.active = false;
                right.active = false;
            }
            unsortedLength--;
            updateBoard()
        }
    };

    useEffect(data ? sizeData : () => {}, [dataSize, data]);

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
                <button onClick={sort}>Sort!</button>
            </Controls>
            <Board id="app-board">
                {sizedData.map(node => {
                    const { value, key, active } = node;
                    return <Node key={key} value={value} active={active} />;
                })}
            </Board>
        </div>
    );
};

export default App;
