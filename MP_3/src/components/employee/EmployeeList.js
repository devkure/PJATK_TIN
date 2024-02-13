import { Link } from 'react-router-dom';

function EmployeeList() {
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
        <tr>
          <td>DummyId</td>
          <td>DummyName</td>
          <td>DummyFname</td>
          <td>DummyNname</td>
          <td>DummyEmail</td>
          <td>DummyRole</td>
          <td>
            <ul className="list-actions">
              <li><button className="list-actions-button-edit"><Link to="/employees/edit">Edytuj</Link></button></li>
              <li><button className="list-actions-button-delete"><Link to="/employees/delete">Usuń</Link></button></li>
              <li><button className="list-actions-button-details"><Link to="/employees/details">Szczegóły</Link></button></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <button  className="button-add"><Link to="/employees/add">Dodaj nowego pracownika</Link></button>
  </main>
    )
}

export default EmployeeList;