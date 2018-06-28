import React from 'react';
import department from '../data/department.json';

let optionList, categorykeys;
    categorykeys = Object.keys(department);
class DropDownList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            text: 'HR'
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.text !== this.state.text){
            this.setState({
                text: nextProps.text
            })
            console.log(nextProps.text);
        }
    }
    render(){
        if((this.props.value) === 'Department'){
            optionList = categorykeys.map((ele, index) => <option keys={index} value={ele}>{ele}</option>)
        }
        else if((this.props.value) === 'Employee Ids'){
            let element = this.state.text,
            departmetKey = department[element];
            console.log(departmetKey);
           optionList = [...departmetKey].map((ele, index) => <option keys={index} value={ele.Id}>{ele.Id}</option>)
        }
        else {
            optionList = (
                null
            )
        }
        return (
            <div className="element">
                <label value={this.props.value}>{this.props.value}</label>
                    <select value={this.props.text} option={this.props.option} onChange={this.props.dropdownChange}>
                        {optionList}
                    </select>
            </div>
        );
    }
}
export default DropDownList;