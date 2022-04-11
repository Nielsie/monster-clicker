import {useEffect, useState} from "react";

export const useGameLoop = () => {
    const [loopInfo, setLoopInfo] = useState({time: 0});
    useEffect(() => {
        let frameId;
        const frame = time => {
            setLoopInfo(current => ({time, deltaTime: time - current.time}));
            frameId = requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, []);
    return loopInfo.deltaTime;
};
