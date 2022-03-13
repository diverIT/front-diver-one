import '../styles/globals.css'
import ContextStore from '../store/Context'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <ContextStore.Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextStore.Provider>

  )
}

export default MyApp
