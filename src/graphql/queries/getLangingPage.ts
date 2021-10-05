const GET_LANDING_PAGE = `
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export { GET_LANDING_PAGE }
