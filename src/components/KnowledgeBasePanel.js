import React from "react";
import styles from './KnowledgeBasePanel.module.css';
import { Link } from "react-router-dom";

const KnowledgeBasePanel = ({knowledgeBase}) => {
    return (
        <div className={styles.documentGrid}>
            {knowledgeBase.map((knowledgeBaseItems) => (
                <div className={styles.documentContainer} key={knowledgeBaseItems.id}>
                    <div className={styles.documentHeader}>
                        <span className={styles.documentLogo}><img src={`/static/img/${knowledgeBaseItems.docLogo}`} alt={knowledgeBaseItems.docType} /></span>
                        <span className={styles.documentTitle}>{knowledgeBaseItems.docType}</span>
                        <span className={styles.documentCount}>{knowledgeBaseItems.docs.items.length}</span>
                    </div>
                    <div className={styles.documentContent}>
                        {knowledgeBaseItems.docs.items.map((knowledgeBaseItemsUrl) => (
                            <Link className={styles.documentationLinks} to={knowledgeBaseItemsUrl.url} key={knowledgeBaseItemsUrl.id}>
                                <span><img src={`/static/img/${knowledgeBaseItems.urlLogo}`} alt={knowledgeBaseItemsUrl.urlName} /></span>
                                <span>{knowledgeBaseItemsUrl.urlName}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default KnowledgeBasePanel;