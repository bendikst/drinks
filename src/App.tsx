import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { RootStore } from './stores/rootStore';
import { StoreContext } from './context/context';
import Layout from './components/layout/Layout';
import TopDrinksView from './components/drinks/topDrinksView';
import DrinksListView from './components/drinks/drinksListView';
import { observer, Provider } from 'mobx-react';

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

// @observer
// export default class App extends React.Component {
//   // private rootStore: RootStore;
//   //views?
//   public view: any;

//   constructor(props: any){
//     super(props);
//     // this.props.rootStore?.authStore
//     this.view = observer(({test}: any) => {
//       return (
//         <div>
//           <Layout>
//             <TopDrinksView></TopDrinksView>
//           </Layout>
//         </div>
//       )
//     })
//   }

//   // componentDidMount() {
//     // init store?
//   // }


//   render() {
//     return (<div>{this.view}</div>);
//   }
// }


// export default class App extends React.Component<{}, {}> {
//   // private rootStore: RootStore;

//   constructor(props: any){
//     super(props);
//     // this.props.rootStore?.authStore
//   }

//   // componentDidMount() {
//     // init store?
//   // }

//   render() {
//     return (
//       <div className="App">
//         <Provider {...rootStore: new RootStore()}>
//           <Layout>
//             <TopDrinksView></TopDrinksView>
//           </Layout>
//         </Provider>
        
//       </div>
//     );
//   }
// }

// const AppView = observer(({rootStore: RootStore}) => {
//   return (
//     <div className="App">
//          <Layout>
//            <TopDrinksView store={rootStore}></TopDrinksView>
//          </Layout>  
//        </div>
//   )
// })

// export default AppView;

const App = observer(({store, selected}: any) => { // TODO: how to type check here
  const test = () => {
    console.log("test called");
  }


  return (
    <div>
      <Layout>
        <TopDrinksView></TopDrinksView>
      </Layout>

    </div>
  )
})

export default App;