import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MainBanner } from "./components/MainBanner"
import { ProjectsSection } from "./components/ProjectsList"
import { TechBanner } from "./components/TechBanner"
import { GlobalStyle } from "./styles/global"
import { ResetStyle } from './styles/reset'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <Header />
      <MainBanner />
      <TechBanner />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
