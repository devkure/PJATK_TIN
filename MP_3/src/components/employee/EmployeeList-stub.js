import { Link } from 'react-router-dom';
import { getEmployeesApiCall } from '../../apiCalls/employeeApiCalls'

function EmployeeList() {
    const employeeList = getEmployeesApiCall();
    return (    
  <main>
    <h2>Pracownicy</h2>
    <table className="table-list">
      <thead>
        <tr>
          <th>Numer pracownika</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Nick</th>
          <th>E-mail</th>
          <th>Rola</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
      {employeeList.map(emp => (
        <tr key={emp._id}>
          <td>{emp._id}</td>
          <td>{emp.fName}</td>
          <td>{emp.lName}</td>
          <td>{emp.nName}</td>
          <td>{emp.email}</td>
          <td>{emp.empRole}</td>
          <td>
            <ul className="list-actions">
              <li><button className="list-actions-button-edit"><Link to={'/employees/edit/${emp._id}'}>Edytuj</Link></button></li>
              <li><button className="list-actions-button-delete"><Link to={'/employees/delete/${emp._id}'}>Usuń</Link></button></li>
              <li><button className="list-actions-button-details"><Link to={'/employees/details/${emp._id}'}>Szczegóły</Link></button></li>
            </ul>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
    <button  className="button-add"><Link to="/employees/add">Dodaj nowego pracownika</Link></button>
  </main>
    )
}

export default EmployeeList;