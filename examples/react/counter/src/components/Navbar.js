import React from "react";


class  NavBar extends React.Component  {
  
    render() {
    return (
    <nav className="navbar ">
      <div className="navbar-brand">
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {this.props.totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
    }
};

export default NavBar;