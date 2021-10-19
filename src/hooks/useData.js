import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);

    // load data form public folder
    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return data;
}

export default useData;