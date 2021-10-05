import React from 'react'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import { GetStaticProps } from 'next'
import { client } from 'graphql/client'
import { GET_LANDING_PAGE } from 'graphql/queries/getLangingPage'

const Index = (props) => (
  <>
    <SectionHero />
    <SectionAboutProject />
    <SectionTech />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  try {
    console.log('GSP')
    const { landingPage } = await client.request(GET_LANDING_PAGE)

    console.log(landingPage)

    return {
      props: {
        ...landingPage
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {}
    }
  }
}

export default Index
