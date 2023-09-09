import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleProp, increase, rise, onSalaryChange} = props;
        const salaryText = `${salary}$`;

        let className = "list-group-item d-flex justify-content-between";

        if(increase) {
            className += ' increase'
        }

        if(rise) {
            className += ' like'
        }

        return (
            <li className={className}>
                <span onClick={onToggleProp}
                data-toggle="rise" className="list-group-item-label">{name}</span>
                <input type='text'
                onChange={(evt) => onSalaryChange(name, evt.target.value)} 
                className="list-group-item-input" 
                defaultValue={salaryText} />
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={onToggleProp}
                        data-toggle="increase" 
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

export default EmployeesListItem;