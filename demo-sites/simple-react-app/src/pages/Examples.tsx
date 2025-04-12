import { NavLink, Outlet } from "react-router";

import './Examples.css'

export function Examples() {
  return (
    <div className="examples">
      <div>
        <nav className='nav'>
          <span>Examples: </span>
          <NavLink to='/examples/text'>Text</NavLink>
          <NavLink to='/examples/canvas'>Canvas</NavLink>
          <NavLink to='/examples/icons'>Icons</NavLink>
          <NavLink to='/examples/image'>Image</NavLink>
        </nav>
      </div>

      <div className="outlet-border">
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
