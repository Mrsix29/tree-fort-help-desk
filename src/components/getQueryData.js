import { useState, useEffect } from "react"
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listFAQTypes } from "../utils/queries";

Amplify.configure(awsmobile);

const getQueryData = (query) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    const LoadData = async () => {
        let listData = [];
        try {
            if (query == "listFAQTypes"){
                const graphqlData = await API.graphql(graphqlOperation(listFAQTypes));
                listData = graphqlData.data.listFAQTypes.items;
            }
            setData(listData)
            setIsPending(false)
            setError(null)
        } catch(err) {
            setIsPending(false)
            setError(err.message)
        }
    };
    useEffect(() => {
        LoadData()
    }, [])
    return {data, isPending, error};
}

export default getQueryData;