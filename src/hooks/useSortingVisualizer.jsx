import { useState, useEffect, useRef } from 'react';
import { randArray } from '../utils/random.js';

const useSortingVisualizer = (baseArray, algorithm) => {
    const nodesFromArray = array => {
        return array.map((value, index) => {
            return { value, key: index };
        });
    };

    const randomArray = randArray(45, 0, 99);
    const initialNodes = nodesFromArray(randomArray);

    const [baseNodes, setBaseNodes] = useState(initialNodes);
    const [nodes, setNodes] = useState(initialNodes);
    const [displaySize, setDisplaySize] = useState(initialNodes.length);
    const [iter, setIter] = useState(algorithm(baseNodes));
    const [sorting, setSorting] = useState(false);

    const frameId = useRef();

    const resize = (array, size) => {
        return array.slice(0, size);
    };

    // Handler and effect for resizing.
    const handleResize = () => {
        const newDisplayNodes = resize(baseNodes, displaySize);
        setNodes(newDisplayNodes);
    };
    useEffect(handleResize, [displaySize]);

    // Handler and effext for new base array.
    const handleNewBaseArray = () => {
        const newBaseNodes = nodesFromArray(baseArray);
        setBaseNodes(newBaseNodes);

        const displayNodes = resize(newBaseNodes, displaySize);
        const newIter = algorithm(displayNodes);
        setNodes(displayNodes);
        setIter(newIter);
    };
    useEffect(handleNewBaseArray, [baseArray]);

    // Step function
    const step = () => {
        for (let i = 0; i < 2; i++) {
            const { done, value: frame } = iter.next();
            if (done) return setSorting(false);
            setNodes([...frame]);
        }
        frameId.current = requestAnimationFrame(step);
    };

    const stop = () => {
        setSorting(false);
        cancelAnimationFrame(frameId.current);
    };
    const start = () => {
        if (sorting) return;
        setSorting(true);
        frameId.current = requestAnimationFrame(step);
    };

    return { nodes, start, stop, sorting, setDisplaySize };
};

export default useSortingVisualizer;
