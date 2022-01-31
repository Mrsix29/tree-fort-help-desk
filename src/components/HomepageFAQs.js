import React, {useEffect} from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './HomepageFAQs.module.css';
import FAQPanels from "./FAQPanels";
import SkeletonLoadingFAQ from './SkeletonLoadingFAQ';
import getData from "./getData";
import { listFAQTypes } from "../graphql/queries";
import awsmobile from "../aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { FAQType, FAQ } from '../models';

Amplify.configure(awsmobile);

const HomepageFAQs = () => {
    useEffect(() => {
        fetchFAQTypes();
    }, [])
    const fetchFAQTypes = async () => {
        try {
            const faqTypesData = await API.graphql(graphqlOperation(listFAQTypes));
            const faqTypesList = faqTypesData.data.listFAQTypes.items;
            console.log("faq Types", faqTypesList);
        } catch (err) {
            console.log("Could not fetch because", err);
        }
    }
    // const newFAQ = await DataStore.save(
    //     new FAQType({
    //         faqType: "Support Request"
    //     })
    // );
    
    // await DataStore.save(
    //     new FAQ({
    //         question: "Loving Amplify DataStore!",
    //         answer: "Loving Amplify DataStore!",
    //         faqType: newFAQ
    //     })
    // );
    const {data, isPending, error} = getData('/.netlify/functions/getFaqs');
    const loadingData = [1, 2, 3, 4, 5];
    const faqTypes = []
    const faqs = []
    data.map((faq) => (
        faqTypes.push(faq.faqType)
    ))
    data.map((faq) => (
        faqs.push(faq.faqs.data)
    ))
    return (
        <div className={styles.faqContainer}>
            <Tabs selectedTabClassName={styles.faqMenuItemActive}>
                <TabList className={styles.faqMenu}>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[0] !== undefined && faqTypes[0]}
                    </Tab>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[1] !== undefined && faqTypes[1]}
                    </Tab>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[2] !== undefined && faqTypes[2]}
                    </Tab>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[3] !== undefined && faqTypes[3]}
                    </Tab>
                </TabList>
                <TabPanel className={styles.tabPanel}>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[0] !== undefined && <FAQPanels faqs={faqs[0]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[1] !== undefined && <FAQPanels faqs={faqs[1]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[2] !== undefined && <FAQPanels faqs={faqs[2]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[3] !== undefined && <FAQPanels faqs={faqs[3]} />}                    
                </TabPanel>
            </Tabs>
        </div>
    ); 
}

export default HomepageFAQs;