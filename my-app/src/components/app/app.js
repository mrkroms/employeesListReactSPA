import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Jhon S.", salary: 2800, increase: false, star: true, id: 1 },
        { name: "Kraig F.", salary: 1800, increase: true, star: false, id: 2 },
        { name: "David U.", salary: 300, increase: false, star: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      star: false,
      id: this.maxId++,
    };
    if (newItem.name.lenght < 3) {
      return this.addItem;
    } else if (newItem.salary === "") {
      return this.addItem;
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   // this.setState(({ data }) => {
  //   //   const index = data.findIndex((elem) => elem.id === id);
  //   //   const old = data[index];
  //   //   const newItem = { ...old, increase: !old.increase };
  //   //   const newArr = [
  //   //     ...data.slice(0, index),
  //   //     newItem,
  //   //     ...data.slice(index + 1),
  //   //   ];

  //   //   return {
  //   //     data: newArr,
  //   //   };

  //   // });
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onToggleStar = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, star: !item.star };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  totalEmployee = () => {
    return this.state.data.length;
  };

  bonusEmployees = () => {
    return this.state.data.filter((item) => item.increase).length;
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "star":
        return items.filter((item) => item.star);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(
      this.searchEmployee(data, term),
      filter
    );
    // const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo
          totalEmployee={this.totalEmployee}
          bonusEmployees={this.bonusEmployees}
          allEmployee={this.allEmployee}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleStar={this.onToggleStar}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;

// function App() {
//   const data = [
//     { name: "Jhon S.", salary: 2800, increase: false, id: 1 },
//     { name: "Kraig F.", salary: 1800, increase: true, id: 2 },
//     { name: "David U.", salary: 300, increase: false, id: 3 },
//   ];

//   return (
//     <div className="app">
//       <AppInfo />
//       <div className="search-panel">
//         <SearchPanel />
//         <AppFilter />
//       </div>
//       <EmployeesList data={data} onDelete={(id) => console.log(id)} />
//       <EmployeesAddForm />
//     </div>
//   );
// }

// export default App;
