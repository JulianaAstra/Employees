import './app-info.css';

function AppInfo({data}) {
    const employeesCount = data.length;
    const increasedEmployees = data.filter(item => item.increase).length;
    
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;