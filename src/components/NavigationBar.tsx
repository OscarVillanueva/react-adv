import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from '../routes/routes'

export const NavigationBar = ({  }) => {
  return (
    <nav>
      <img src = { logo } alt = "react logo" />
      <ul>
        {routes.map(route => (
          <li
            key={route.path + route.to}
          >
            <NavLink 
              to = { route.to }
              className={ ({ isActive }) => isActive ? 'nav-active' : '' }
            >
              { route.name }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
