import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { RootStore } from './stores/rootStore';
import { StoreContext } from './context/context';
import Layout from './components/layout/Layout';
import TopDrinksView from './components/drinks/topDrinksView';
import DrinksListView from './components/drinks/drinksListView';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

export default class App extends React.Component<{rootStore?: RootStore}, {}> {
  // private rootStore: RootStore;

  constructor(props: any){
    super(props);
    // this.props.rootStore?.authStore
  }

  // componentDidMount() {
    // init store?
  // }

  render() {
    return (
      <div className="App">
        <Layout>
          <TopDrinksView></TopDrinksView>
        </Layout>

        
      </div>
    );
  }
}

