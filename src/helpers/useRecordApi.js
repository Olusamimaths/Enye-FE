import { useEffect, useState } from 'react';

async function getRecords(url) {
    const response = await fetch(url);
    const body = await response.json();

    return body;
}

const useRecordApi =  (url) => {
    const [records, setRecords] = useState({records: { profiles: []}, status: "", size: ""});
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchRecords = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const result = await getRecords(url);
                setRecords(result);
            } catch (error) {
                setIsError(error);
            }

            setIsLoading(false);
        }

        fetchRecords();
    }, [])

    return [{isLoading, isError, records}, setRecords]
}

export default useRecordApi;