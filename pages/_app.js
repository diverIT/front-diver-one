import '../styles/globals.css'
import Provider from '../store/Provider'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp
