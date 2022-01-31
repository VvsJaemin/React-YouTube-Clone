import React from "react";
import HorizontalCard from "../components/shared/HorizontalCard";
import ContentsLayout from "../components/shared/ContentsLayout";
import Layout from "../components/shared/Layout";
import youtubeData from '../data/youtubeData.json';

const Explore =()=>{


    return(
        <Layout activeMenu="explore">
           <ContentsLayout>
               {youtubeData['data'].map(function(data, index){
                   return <HorizontalCard key={`explore-card-${index}`}data={data}/>;
               })}
           </ContentsLayout>
        </Layout>
    )
}

export default Explore;