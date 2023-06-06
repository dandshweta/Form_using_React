import { Component } from "react";
class Form extends Component {
  state = {};
  render() {
    return (
      <form>
        <div>
          <label>Name:</label>
          <input name="name" placeholder="Enter name here.." type="text" value="" onchange={} />
        </div>
        <div>
          <label></label>
        </div>
      </form>
    );
  }
}
export default Form;
