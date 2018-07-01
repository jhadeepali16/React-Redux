import React from 'react';
import DropDownList from './DropDownList';
import EmployeeDetail from './EmployeeDetail';
import data from '../data/data.json'

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.employeeData = React.createRef();
        this.state = {
            label: 'Department',
            data: '',
            text: '',
            option:'',
            target:''
        }
    }
    
    handleChange = (e) => {
        let text = e.target.value;       
        // let target = text; 
        this.setState({
            text: text,
            target: text
        });   
    }
    getData = (e, option) => {
        this.employeeData.current.fetchData();
    }
    
    handleSelectedOption = (e) => {
        let option = e.target.value;
        this.setState({
            option: option,
            target: option
        });
    }

    render(){
        return(
            <section className="c-department-layout">
                <section className="department">
                    <DropDownList value={data[0].department} dropdownChange={this.handleChange} text={this.state.text} />
                    <DropDownList value={data[1].employeeIds} text={this.state.text} option={this.state.option} dropdownChange={this.handleSelectedOption} />
                    <div className="element cta">
                        <button onClick={this.getData} userId={this.state.option}>Get Details</button>
                        <button>Clear</button>
                    </div>
                </section>
                <EmployeeDetail ref={this.employeeData} userId={this.state.option} />
            </section>
        );
    }
}
export default Employee;