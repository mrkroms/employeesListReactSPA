import "./app-info.css";

const AppInfo = ({ totalEmployee, bonusEmployees }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников компании</h1>
      <h2>Общее число сотрудников: {totalEmployee()}</h2>
      <h2>Премию получат: {bonusEmployees()}</h2>
    </div>
  );
};

export default AppInfo;
