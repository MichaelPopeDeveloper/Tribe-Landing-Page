import React from 'react'
import { NextPage } from 'next'

// Components
import Main from '../components/Main';
import ContentFeed from '../components/ContentFeed';
import Feature1 from '../components/Features/Feature1';
import Feature2 from '../components/Features/Feature2';

const Home: NextPage = () => {
    return <>
        <Main ContentFeed={ContentFeed} />
        <Feature1 />
        <Feature2 />
    </>
}

export default Home