import './App.css';
import Layout from './components/layout/Layout';
import TopDrinksView from './components/drinks/topDrinksView';
import { observer } from 'mobx-react';

const App = observer(({store, selected}: any) => {

  return (
    <div>
      <Layout>
        <TopDrinksView></TopDrinksView>
      </Layout>

    </div>
  )
})

export default App;