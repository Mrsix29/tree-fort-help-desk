import { useState, useEffect } from "react"
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listHelpDeskSections, listPopularItemTypes, listFAQTypes, listDocTypes, listResourceTypes } from "../utils/queries";

Amplify.configure(awsmobile);

const getQueryData = (query) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    const LoadData = async () => {
        let listData = [];
        try {
            if (query == "listHelpDeskSections"){
                const graphqlData = await API.graphql(graphqlOperation(listHelpDeskSections));
                listData = graphqlData.data.listHelpDeskSections.items;
            }
            if (query == "listPopularItemTypes"){
                const graphqlData = await API.graphql(graphqlOperation(listPopularItemTypes));
                listData = graphqlData.data.listPopularItemTypes.items;
            }
            if (query == "listFAQTypes"){
                const graphqlData = await API.graphql(graphqlOperation(listFAQTypes));
                listData = graphqlData.data.listFAQTypes.items;
            }
            if (query == "listDocTypes"){
                const graphqlData = await API.graphql(graphqlOperation(listDocTypes));
                listData = graphqlData.data.listDocTypes.items;
            }
            if (query == "listResourceTypes"){
                const graphqlData = await API.graphql(graphqlOperation(listResourceTypes));
                listData = graphqlData.data.listResourceTypes.items;
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