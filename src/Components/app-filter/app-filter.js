import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'salary', label: ' З/П больше 1000$'}
  ]
  
  const onFilter = (evt) => {
    const filter = evt.target.getAttribute('data-filter');
    props.onFilter(filter);
  }

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button 
        className={`btn ${clazz}`}
        onClick={onFilter}
        type='button'
        key={name}
        data-filter={name}>
          {label}
      </button>
    )
  })

    return (
      <div className="btn-group">
        {buttons}          
      </div>
  )
}

export default AppFilter;