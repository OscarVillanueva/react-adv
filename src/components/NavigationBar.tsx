import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

export const NavigationBar = ({  }) => {
  return (
    <nav>
      <img src = { logo } alt = "react logo" />
      <ul>
        <li>
          <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Home
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
