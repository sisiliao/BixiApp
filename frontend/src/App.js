import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import Bixi from './components/Bixi'
import BixiMap from './components/BixiMap'
import Navbar from './components/common/Navbar'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='content'>
        <Switch>
          <Route path='/stations' component={Bixi} />
          {/* <Route path='/map' render={BixiMap} /> */}
          <Route
            path='/map'
            component={() => (
              <BixiMap
                mapboxApiAccessToken={`pk.eyJ1Ijoic2lzaWxpYW8iLCJhIjoiY2tsYmY2cGZyMGJ5bTJ2bXJjbXA5eWl2MSJ9.9FaXXak2RUj37HWvT6mJuw
`}
              />
            )}
          />
          <Redirect path='/' exact to='/stations' />
          <Redirect to='/notfound' />
        </Switch>
      </div>
    </div>
  )
}

export default App
