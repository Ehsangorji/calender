import React, { Component } from 'react'
import './Arrayfunctions.css';
  
export class Arrayfunctions extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            myArray:[],
            value: '',
            tempVal: '',
            result: '',
        };
    }
// --------------------------------------------------------------------
    fillArray=()=>{
        let newArr= [...this.state.myArray];
        if(this.state.value){
            newArr.push(this.state.value);
        }
        this.setState({
            myArray : newArr,
        });
    }
// --------------------------------------------------------------------
    findArray=()=>{
        let newArr= [...this.state.myArray];
        let found ='';
        if(this.state.tempVal){
            found = newArr.find(e => e === this.state.tempVal);
        }
        let result = '';
        if(found){
            result='found';
        }
        else{
            result='not found!';
        } 
        this.setState({
            result : result,
        });
    }
// --------------------------------------------------------------------
    someArray=()=>{
        let newArr= [...this.state.myArray];
        let found ='';

        if(this.state.tempVal){
            found = newArr.some(e => e === this.state.tempVal);
        }
        let result = '';
        if(found){
            result='found';
        }
        else{
            result='not found!';
        }
        this.setState({
            result : result,
        });
    }
// --------------------------------------------------------------------  
everyArray=()=>{
    let newArr= [...this.state.myArray];
    let found ='';
    if(this.state.tempVal){
        found = newArr.every(e => e === this.state.tempVal);
    }
    let result = '';
    if(found){
        result='everyfound';
    }
    else{
        result='every not found!';
    } 
    this.setState({
        result : result,
    });
}    
// --------------------------------------------------------------------  
findIndexArray=()=>{
    let newArr= [...this.state.myArray];
    let found ='';
    if(this.state.tempVal){
        found = newArr.findIndex(e => e === this.state.tempVal);
    }
    let result = '';
    if(found){
        result='found :' + this.state.tempVal;
    }
    else{
        result='findIndexArray not found!';
    } 
    this.setState({
        result : result,
    });
} 
// --------------------------------------------------------------------  
indexofArray=()=>{
    let newArr= [...this.state.myArray];
    let found ='';
    if(this.state.tempVal){
        found = newArr.findIndex(e => e === this.state.tempVal);
    }
    let result = '';
    if(found){
        result='indexof found :' + this.state.tempVal;
    }
    else{
        result='indexofArray not found!';
    } 
    this.setState({
        result : result,
    });
}
filterArray=()=>{
    let newArr= [...this.state.myArray];
    let found ='';
    if(this.state.tempVal){
        found = newArr.filter(e => e === this.state.tempVal);
    }
    let result = '';
    if(found){
        result='filter found :' + this.state.tempVal;
    }
    else{
        result='filter not found!';
    } 
    this.setState({
        result : result,
    });
}
    render() {
        return (
             <div  className="holder">
                <input
                    className="labelstyl" 
                    onChange={e => this.setState({value: e.target.value})}
                />
                <br/>
                {this.state.myArray.join(" , ")}
                <br/>
                <input type="submit" value="Fill"
                onClick={this.fillArray} />
                <br/>
                <input
                    value={this.state.tempVal}
                    onChange={e => this.setState({tempVal: e.target.value})}
                />

                <input type="submit" value="Find"
                    onClick={this.findArray} 
                />
                {this.state.result}
                <br/>
                <input type="submit" value="some"
                    onClick={this.someArray} 
                />
                {this.state.result}
                <br/>
                <input type="submit" value="every"
                    onClick={this.everyArray} 
                />
                {this.state.result}
                <br/>
                <input type="submit" value="findIndex"
                    onClick={this.findIndexArray} 
                />
                {this.state.result}
                <br/>
                <input type="submit" value="indexof"
                    onClick={this.indexofArray} 
                />
                {this.state.result}
                <br/>
                <input type="submit" value="filter"
                    onClick={this.filterArray} 
                />
                {this.state.result}
                <br/>
             </div>
        );
      }
}

export default Arrayfunctions
