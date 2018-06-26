import React from 'react';
import DropDownList from './DropDownList';
import data from '../data/data.json'

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label: 'Department'
        }
    }
    
    render(){
        return(
            <section className="department">
                <DropDownList value={data[0].department} dropdownChange={this.handleChange}/>
                <DropDownList value={data[1].employeeIds} />
                <div className="element cta">
                    <button>Get Details</button>
                    <button>Clear</button>
                </div>
            </section>
        );
    }
}
export default Employee;