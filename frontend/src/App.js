import './App.css';
import Navbar from './components/Navbar';
import { Layout, Menu } from 'antd';
import Items from './pages/Items';

const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Items/>
    </div>
  );
}

export default App;
