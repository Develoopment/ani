import 'bulma/css/bulma.min.css';
import './App.css'
import EventMain from "./screens/EventMain"

function App() {

  return (
    <>

      <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">{/*Add logo here*/}</div>

        <div class="navbar-menu"></div>

      </nav>

      <EventMain />
    </>
  )
}

export default App
