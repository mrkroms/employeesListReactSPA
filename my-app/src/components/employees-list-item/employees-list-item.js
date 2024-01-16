import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       increase: false,
  //       star: false,
  //     };
  //   }

  //   onIncrease = () => {
  //     this.setState(({ increase }) => ({ increase: !increase }));
  //   };

  //   addStar = () => {
  //     this.setState(({ star }) => ({ star: !star }));
  //   };

  const { name, salary, onToggleProp, increase, star } = props;
  //   const { increase } = this.state;
  //   const { star } = this.state;
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }

  if (star) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="star"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

// const EmployeesListItem = ({ name, salary, increase }) => {
//   let classNames = "list-group-item d-flex justify-content-between";
//   if (increase) {
//     classNames += " increase";
//   }
//   return (
//     <li className={classNames}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="text"
//         className="list-group-item-input"
//         defaultValue={salary + "$"}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm ">
//           <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

// export default EmployeesListItem;
