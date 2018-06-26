import React from 'react';
import department from '../data/department.json';
// const data = department;
// console.log(data);
let optionList, categorykeys, arr = [];
    categorykeys = Object.keys(department);
class DropDownList extends React.Component{
    constructor(props){
        super(props);
        // this.department = [];
        // this.props.selectChange = change;
        this.state = {
            value: this.props.value,
            option: this.props.option
        }
    }
    handleChange = () => {
        categorykeys.forEach((ele, index) => {
            for(let i=0; i<categorykeys.length; i++){
                arr = department[ele];
                console.log(categorykeys[i]);
                console.log(arr);
                // <span key={index}>{ele}</span>
                return true;
            }
        })
    }
    render(){
        if((this.props.value) === 'Department'){
            optionList = categorykeys.map((ele, index) => <option keys={index} value={index}>{ele}</option>)
        }
        else {
           optionList = (
                null
            )
        }
        return (
            <div className="element">
                <label value={this.props.value}>{this.props.value}</label>
                    <select onChange={this.handleChange}>
                        {optionList}
                    </select>
            </div>
        );
    }
}
export default DropDownList;