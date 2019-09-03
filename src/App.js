import React,{Component} from 'react';


import './App.css';
import SortTable from './Components/SortTable';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'


class App extends Component {
  state={
    data:[]
  }


  componentDidMount(){
    fetch("https://private-anon-ce20674572-sakura3.apiary-mock.com/applicants" , {headers:{"Content-Type": 'text/xml'}})
    .then(res => res.text())
    .then(parsedData=>JSON.parse(parsedData.replace(/\,(?!\s*?[\{\[\"\'\w])/g, '')))
    .then(data=>this.setState({data}))
  }



  render()
  {
  
  return(<div className='App-header'>
    <h1>Details of Candidate</h1>
    <h4 className='note'>Click on Created At and Credit indicator colum header to sort the candidates according to it. </h4>
    <SortTable data={this.state.data}/>
   
  </div>)


  }
}

export default App;
