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
        let department = data[0].department,
            employeeId = data[1].employeeIds;
        if(department){
            let text = e.target.value;        
            console.log(text);
            console.log(data[0].department);
            this.setState({text: text});
        }
        else if(employeeId) {
            let option = e.target.value;
            console.log(option);
            console.log(data[1].employeeIds);
            this.setState({option: option});
        }
        
    }

    // handleChange = (e) => {
    //     let department = data[0].department,
    //         employeeId = data[1].employeeIds;
    //     if(department){
    //         let text = e.target.value;        
    //         console.log(text);
    //         console.log(data[0].department);
    //         this.setState({text: text});
    //     }
    //     else if(employeeId) {
    //         let option = e.target.value;
    //         console.log(option);
    //         console.log(data[1].employeeIds);
    //         this.setState({option: option});
    //     }
        
    // }

    // handleSelectedOption = (e) => {
    //     // alert(e);
    //     let option = e.target.value;
    //     this.setState({option: option});
    // }

    render(){
        return(
            <section className="department">
                <DropDownList value={data[0].department} dropdownChange={this.handleChange} text={this.state.text} />
                <DropDownList value={data[1].employeeIds} text={this.state.text} option={this.state.option} />
                <div className="element cta">
                    <button>Get Details</button>
                    <button>Clear</button>
                </div>
            </section>
        );
    }
}
export default Employee;