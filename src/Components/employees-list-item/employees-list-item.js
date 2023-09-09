import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            increase: false,
            liked: false
        }
    }
    
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({liked}) => ({
            liked: !liked
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, liked} = this.state;

        let className = "list-group-item d-flex justify-content-between";

        if(increase) {
            className += ' increase'
        }

        if(liked) {
            className += ' like'
        }

        return (
            <li className={className}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type='text' className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={this.onIncrease} 
                        className="btn-cookie btn-sm"
                        type='button'>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button 
                        className="btn-trash btn-sm"
                        type='button'
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;