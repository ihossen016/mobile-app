import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchdata = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get(url);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an Error.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchdata();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
