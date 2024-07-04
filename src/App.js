import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    console.log('App component mounted');
    tg.ready();
    console.log('Telegram ready');
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
