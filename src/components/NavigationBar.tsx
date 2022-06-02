import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

export const NavigationBar = ({  }) => {
  return (
    <nav>
      <img src = { logo } alt = "react logo" />
      <ul>
        <li>
          <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
