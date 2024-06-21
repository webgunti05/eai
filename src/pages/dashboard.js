import React from 'react';
import Layout from '../components/layout';
import AppConstants from '../configs/appConstants';

const Dashbaord = () => {
    return(
        <>
        <Layout>
            <p>{AppConstants?.DashboardPage?.pageTitle}</p>
        </Layout>
            
        </>
    )
}

export default Dashbaord;