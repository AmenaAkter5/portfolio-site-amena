import React, { useEffect, useRef, useState } from 'react';

const Counter = ({start = 0, end}) => {

    const [counter, setCounter] = useState(null);

    const ref = useRef(start);

    const accumulator = end / 200;

    const updateCounterState = () => {
        if(ref.current < end) {
            const result = Math.ceil(ref.current * accumulator);
            if(result > end) return setCounter(end);
            setCounter(result);
            ref.current= result;
        }
        setTimeout(updateCounterState, 50);
    }


    useEffect( () => {
        let isMounted = true;
        if(isMounted){
            updateCounterState();
        };

    }, [end, start])

    

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    );
};

export default Counter;