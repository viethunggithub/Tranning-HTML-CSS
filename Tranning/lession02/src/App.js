import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar.js'
import Main from './components/Main/Main.js'
import StoryUpdate from './components/StoryUpdate/StoryUpdate.js'
import StoryGirl from './components/StoryGirl/StoryGirl.js'
import StoryBoy from './components/StoryBoy/StoryBoy.js'
import Footer from './components/Footer/Footer.js'
import ShotCut from './components/ShortCut/ShortCut.js'
import DownApp from './components/DownApp/DownApp.js'

function App() {
   return (
      <>
         <Header />
         <Navbar />
         <Main />
         <StoryUpdate />
         <StoryGirl />
         <StoryBoy />
         <Footer />
         <ShotCut />
         <DownApp />
      </>
   )
}
export default App;