import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

export const NavigationBar = ({  }) => {
  return (
    <nav>
      <img src = { logo } alt = "react logo" />
      <ul>
        <li>
          <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
            Lazy 3
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
