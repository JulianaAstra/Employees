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
                {name: 'John B.', salary: 800, id: 1, increase: true, rise: true},
                {name: 'Ann C.', salary: 5000, id: 2, increase: true, rise: false},
                {name: 'Kate R.', salary: 1700, id: 3, increase: false, rise: true}
            ],
            term: ''
        }
    }
    
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
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
            increase: false,
            rise: false
        }

        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    } 

    render() {
        const {data, term} = this.state;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className='app'>
                <AppInfo data={data}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;