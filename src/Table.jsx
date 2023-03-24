import "./App.css";
const Table = ({ data }) => {
  return (
    <div className="Table">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>surname</th>
            <th>email</th>
          </tr>
          {data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
