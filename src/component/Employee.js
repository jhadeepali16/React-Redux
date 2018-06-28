import React from 'react';
import DropDownList from './DropDownList';
import data from '../data/data.json'

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label: 'Department',
            data: '',
            text: '',
            option:''
        }
    }
    
    handleChange = (e) => {
        let text = e.target.value;        
        console.log(text);
        console.log(data[1].department);
        if(data[0].department){
            this.setState({text: text});
        }
        else if(data[1].employeeIds) {
            let option = e.target.value;
            console.log(option);
            this.setState({option: option});
        }
        
    }

    // handleSelectedOption = (e) => {
    //     // alert(e);
    //     let option = e.target.value;
    //     this.setState({option: option});
    // }

    render(){
        return(
            <section className="department">
                <DropDownList value={data[0].department} dropdownChange={this.handleChange} text={this.state.text} />
                <DropDownList value={data[1].employeeIds} text={this.state.text} option={this.state.option} dropdownChange={this.handleChange} />
                <div className="element cta">
                    <button>Get Details</button>
                    <button>Clear</button>
                </div>
            </section>
        );
    }
}
export default Employee;