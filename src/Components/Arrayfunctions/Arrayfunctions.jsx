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
            result='some : found';
        }
        else{
            result='some : not found!';
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
        result='every is true';
    }
    else{
        result='every is false';
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
        result='index number :' + found;
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
        result='indexof found :' + found;
    }
    else{
        result='index of Array not found!';
    } 
    this.setState({
        result : result,
    });
}
// -------------------------------------------------------------------- 
filterArray=()=>{
    let newArr= [...this.state.myArray];
    let found ='';
    if(this.state.tempVal){
        found = newArr.filter(e => e === this.state.tempVal);
    }
    let result = '';
    if(found){
        result='filter found : [' + found + " ] " ;
    }
    else{
        result='filter not found!';
    } 
    this.setState({
        result : result,
    });
}
// -------------------------------------------------------------------- 
    render() {
        return (
        <div>    
             <div  className="holder">
                <input
                    className="labelstyl" 
                    placeholder=" Enter Array items"
                    onChange={e => this.setState({value: e.target.value})}
                />
                <br/>
                {this.state.myArray.join(" , ")}
                <br/>
                <input className="substyle"
                type="submit" 
                value="Fill"
                onClick={this.fillArray} />
                <br/>
                <input
                    value={this.state.tempVal}
                    onChange={e => this.setState({tempVal: e.target.value})}
                />
                
                <div className="resultShow">
                   {this.state.result} 
                </div>

            </div>
            <div className="holder2">
                <input type="submit"
                 classname="inp" 
                 className="substyle-inp"
                 value="Find"
                    onClick={this.findArray} 
                />
                
                <br/>
                <input type="submit" className="substyle-inp" value="some"
                    onClick={this.someArray} 
                />
                
                <br/>
                <input type="submit" className="substyle-inp" value="every"
                    onClick={this.everyArray} 
                />
                
                <br/>
                <input type="submit" className="substyle-inp" value="findIndex"
                    onClick={this.findIndexArray} 
                />
                
                <br/>
                <input type="submit" className="substyle-inp" value="indexof"
                    onClick={this.indexofArray} 
                />
                
                <br/>
                <input type="submit" className="substyle-inp" value="filter"
                    onClick={this.filterArray} 
                />
                
                <br/>
            </div>
        </div>         
        );
      }
}

export default Arrayfunctions
