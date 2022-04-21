import '../styles/globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Layout from '../Components/Layout'
import { useState } from 'react'
import { AppProvider } from '../Context'
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({}) // Butun Componentlere yaymak için
  return <AppProvider value={{ user, setUser }}>
    <Layout>
      <Component {...pageProps} />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </Layout>
  </AppProvider>
}
export default MyApp
