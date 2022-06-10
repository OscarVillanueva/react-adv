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
          <NavLink to="/formik" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Formik
          </NavLink>
        </li>
        <li>
          <NavLink to="/yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Yup
          </NavLink>
        </li>
        <li>
          <NavLink to="/component" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Components
          </NavLink>
        </li>
        <li>
          <NavLink to="/abstract" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Abstraction
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
