import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './app.css'
const App = () => {
  return (
    <>
      <div id='container'>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default App
