import React from 'react'

import Layout from '../../components/Layout/Layout'
import Card from './BlogComponent/cards/Card'

const Home = () => {
  return (
    <div>
<Layout>


<h1>hellow welcomw to the cards section</h1>
<div className='flex flex-wrap justify-center space-x-5 mt-5'>
<Card />
<Card />
<Card />
<Card />
</div>


</Layout>
    </div>
  )
}

export default Home
