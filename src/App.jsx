import React, { Component } from "react";
import { data } from "./mock";
import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      selected: null,
      name: ``,
      status: ``,
      count: 0,
      editname:``,
      editstatus:``
    };
  }
  render() {
    const onDelete = (id) => {
      const newData = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: newData });
    };
    const onAdd = () => {
      console.log(this.state.name, this.state.status);
      const data = {
        name: this.state.name,
        status: this.state.status,
        id: this.state.data.length + 1,
      };
      const newData = [...this.state.data, data];
      // console.log(data);
      this.setState({ data: newData });
    };
    const onName = (e) => {
      this.setState({ name: e.target.value });
    };
    const onStatus = (e) => {
      this.setState({ status: e.target.value });
    };
    const onEdit =(id,name,status)=>{
      this.setState({selected:id,editname:name,editstatus:status})
    }
    const onChangeName = (e) => {
      this.setState({editname:e.target.value})
    };
    const onChangeStatus = (e) => {
      this.setState({editstatus:e.target.value})
    };
    const onSave=(id)=>{
      const newData = this.state.data.map((value)=>{
        return value.id !==id 
        ?value
        :{
          ...value,
          name:this.state.editname,
          status:this.state.editstatus
        }
      })
      this.setState({selected:null,data:newData})
    }
    return (
      <div>
        <div className="container">
          <div className="content">
            <input onChange={onName} placeholder="name" type="text" />
            <input onChange={onStatus} placeholder="surname" type="text" />
            <button onClick={onAdd}>Add</button>
          </div>
        </div>

        <table border="1" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(({ id, name, status }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {this.state.selected === id ? (
                      <input
                        onChange={onChangeName}
                        type="text"
                        disabled={this.state.selected!==id}
                        value={this.state.editname}
                      />
                    ) : (
                      name
                    )}
                  </td>
                  {/* <td>{name}</td>
                  <td>{status}</td> */}
                  <td>
                    {this.state.selected === id ? (
                      <input
                        onChange={onChangeStatus}
                        type="text"
                        disabled={this.state.selected!==id}
                        value={this.state.editstatus}
                      />
                    ) : (
                      status
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        this.state.selected === id
                          ? onSave(id)
                          : onEdit(id, name, status)
                      }
                      disabled={
                        this.state.selected === id &&
                        (this.state.editname.length <= 0 ||
                          this.state.editstatus <= 0)
                      }
                    >
                      {this.state.selected===id?"Save":'Edit'}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
