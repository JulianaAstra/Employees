import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { v4 as uuidv4 } from 'uuid';
import './app.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'John B.', salary: 800, id: 1, increase: true},
                {name: 'Ann C.', salary: 5000, id: 2, increase: true},
                {name: 'Kate R.', salary: 1700, id: 3, increase: false}
            ]
        }
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name, 
            salary: salary,
            id: uuidv4(),
            increase: false
        }

        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }

    render() {

        return (
            <div className='app'>
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;