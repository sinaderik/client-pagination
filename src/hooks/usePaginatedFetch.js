import { useState, useEffect } from "react";
import _ from "lodash";

export function usePaginatedFetch(url, pageSize) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await fetch(url);
        const response = await data.json();

        const paginatedData = _.chunk(response, pageSize)

        setLoading(false)
        setData(paginatedData)
    }

    return [data, loading]
}

