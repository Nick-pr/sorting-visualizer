import './App.css';
import { useState } from 'react';
import Controls from './components/Controls/Controls.jsx';
import Slider from './components/Slider/Slider.jsx';
import Board from './components/Board/Board.jsx';

const App = () => {
    const [array, setArray] = useState([]);
    const [arrayLength, setArrayLength] = useState(50);
    const populateBoard = () => {};
    return (
        <div className="App">
            <Controls id="app-controls">
                <Slider
                    initialValue={arrayLength}
                    onChange={e => setArrayLength(e.target.value)}
                />
                <button>Sort!</button>
            </Controls>
            <Board id="app-board" />
        </div>
    );
};

export default App;
