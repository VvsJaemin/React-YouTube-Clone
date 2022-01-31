import React from "react";
import Layout from "../components/shared/Layout";
import 'moment/locale/ko';
import ContentsLayout from "../components/shared/ContentsLayout";
import sortedYoutubeData from '../data/sortedYoutubeData.json';
import SubscriptionCard from "../components/subscription/SubscriptionCard ";
const Subscription =()=>{

    return(
        <Layout activeMenu="subscription">
            <ContentsLayout>
                {sortedYoutubeData['data'].map(function (data, index) {
                    return(
                        <SubscriptionCard data={data} key={`subscription-card-${index}`}/>
                    )
                })}
            </ContentsLayout>
        </Layout>
    )
}

export default  Subscription;