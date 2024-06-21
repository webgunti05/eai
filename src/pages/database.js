import React from 'react';
import Layout from '../components/layout';
import AppConstants from '../configs/appConstants';

const DataBase = () => {
    return(
        <>
        <Layout>
            <p>{AppConstants?.DatabasePage?.pageTitle}</p>
        </Layout>
            
        </>
    )
}

export default DataBase;