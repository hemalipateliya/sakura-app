import React,{Component} from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import Detail from './Detail';
import './SortTable.css';



class SortTable extends Component {

    state={
        selectedCandidate:-1,
        data:null,
        show:false
    }
       
        showDetails(row){
            this.setState({selectedCandidate:row.id});
            this.setState({data:row})
            this.setState({show:true})
          
        }
       

        handleClose=()=>
        {
          this.setState({show:false})
        }

           buttonFormatter=(cell, row)=>{
            return <button onClick={() => {this.showDetails(row)}}> Show Details </button>;
          }
   
    render(){


       const detailOverlay =this.state.selectedCandidate !== -1 ? (
          
           <Detail  
               row={this.state.data} handleClose={this.handleClose} show={this.state.show}/>)
              : null;
        return (

            <div>   
            <BootstrapTable ref='table' data={this.props.data} striped hover >
              <TableHeaderColumn isKey datanAlign="center" dataField='id'  >Product ID</TableHeaderColumn>
              <TableHeaderColumn datanAlign="center"   dataField='first_name' dataSort={true}>First Name</TableHeaderColumn>
              <TableHeaderColumn datanAlign="center" dataField='last_name' dataSort={true}>Last Name</TableHeaderColumn>
              <TableHeaderColumn datanAlign="center" dataField='created_at' dataSort={true}>Created At</TableHeaderColumn>
              <TableHeaderColumn datanAlign="center" dataField='credit_indicator' dataSort={true}>Credit Indicator</TableHeaderColumn>
              <TableHeaderColumn datanAlign="center" dataField='button'  dataFormat={this.buttonFormatter.bind(this)} >Show Details</TableHeaderColumn>   
          </BootstrapTable>
          <>
          {detailOverlay}
          </>
          </div>
          
        )
         
  
}
}

export default SortTable;
