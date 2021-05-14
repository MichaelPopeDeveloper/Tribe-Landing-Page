import React from 'react'
import { NextPage } from 'next'

// Components
import Main from '../components/Main';
import ContentFeed from '../components/ContentFeed';

const Home: NextPage = () => {
    return <>
        <Main ContentFeed={ContentFeed} />
    </>
}

export default Home