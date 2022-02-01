import React from "react";
import styles from './ResourcesPanel.module.css';
import { Link } from "react-router-dom";

const ResourcesPanel = ({resources}) => {
    return (
        <div className={styles.resourcesGrid}>
            {resources.map((resource) => (
                <div className={styles.resourcesContainer} key={resource.id}>
                    <div className={styles.resourcesHeader}>
                        <div className={styles.resourcesIMG}><img src={`/static/img/${resource.resourceLogo}`} /></div>
                        <div className={styles.resourcesTitle}>{resource.resourceType}</div>
                    </div>
                    <div className={styles.resourcesContent}>
                        {resource.resources.items.map((resourceItemsUrl) => (
                            <Link className={styles.resourcesLinks} to={resourceItemsUrl.url} key={resourceItemsUrl.id}>
                                <span><img src={`/static/img/${resource.urlLogo}`} alt={resourceItemsUrl.urlName} /></span>
                                <span>{resourceItemsUrl.urlName}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResourcesPanel;