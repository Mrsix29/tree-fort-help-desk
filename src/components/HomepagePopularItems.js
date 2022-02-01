import React from "react";
import styles from './HomepagePopularItems.module.css';
import PopularItemsPanel from "./PopularItemsPanel";
import SkeletonLoadingPopular from './SkeletonLoadingPopular';
import getQueryData from "./getQueryData";


const HomepagePopularItems = () => {
  const {data, isPending, error} = getQueryData("listPopularItemTypes");
  const loadingData = [1, 2, 3];
  return (
    <div className={styles.popularBackground}>
      <div className={styles.popularContainer}>
        {error && <div className="center">{error}</div>}
        {isPending && <div className={styles.loading}><SkeletonLoadingPopular items={loadingData} /></div>}
        {data && <PopularItemsPanel popularItems={data} />}
      </div>
    </div>
  );
}

export default HomepagePopularItems;