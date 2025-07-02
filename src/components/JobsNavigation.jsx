import { NavLink } from "react-router";

import classes from "./JobsNavigation.module.css";

export default function JobsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Post new job
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
