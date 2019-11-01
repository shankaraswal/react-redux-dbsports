import React, { Component } from 'react';
import { connect } from "react-redux";
import {incAction, decAction, fetchLeagues} from './../action/requests'

class RCounter extends Component {
  constructor(props){
    super(props);
    this.state = { 
        count: 0 
        }
    }
    componentDidMount(){
      this.props.getLeagues();
    }
  

  render() {
      console.log(this.props.leagues)
    return (
      <div>
        <h2>Counter: using Redux</h2>
        <div>
          <button onClick={this.props.dec}>-</button>
          <span><h1> [ {this.props.count} ] </h1></span>
          <button onClick={this.props.inc}>+</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
    count: state.counterState,
    leagues: state.leaguesState

})

const mapDispatchToProps=(dispatch)=>({
    getLeagues:()=>dispatch(fetchLeagues()),
    inc: ()=>dispatch(incAction()),
    dec: ()=>dispatch(decAction()),
})


export default connect(mapStateToProps, mapDispatchToProps)(RCounter);