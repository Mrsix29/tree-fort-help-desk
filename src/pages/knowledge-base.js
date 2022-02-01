import React from 'react';
import Layout from '@theme/Layout';
import styles from './knowledge-base.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageSupportRequest from '../components/HomepageSupportRequest';
import getQueryData from "../components/getQueryData";
import KnowledgeBasePanel from '../components/KnowledgeBasePanel';
import SkeletonLoadingDocs from '../components/SkeletonLoadingDocs';

export default function KnowledgeBase() {
    const {data, isPending, error} = getQueryData("listDocTypes");
    const loadingData = [1, 2, 3, 4];
    return (
        <Layout
            title="Knowledge Base"
            description="">
            <HomepageHeader title="Search our knowledge base here" cssBackgroundClass="homePageBannerOther" />
            <main>
                <div className={styles.knowledgeBaseContainer}>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingDocs items={loadingData} height={300} /></div>}
                    {data && <KnowledgeBasePanel knowledgeBase={data} />}
                </div>
            </main>
            <HomepageSupportRequest />
        </Layout>
    );
}