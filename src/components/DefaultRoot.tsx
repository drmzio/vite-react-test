import { Link, Outlet } from '@tanstack/router';

export default function Root() {
  return (
    <div>
      {/* @ts-ignore */}
      <Link to={`/`}>Home</Link>{` | `}
      <Link to={`/about`}>About</Link>{` | `}
      <Link to={`/users`}>Users</Link>{` | `}
      <Link to={`/users/new`}>New user</Link>{` | `}
      <Link to={`/users/$userId`} params={{ userId: 123 }}>User 123</Link>
      <hr />
      <Outlet />
    </div>
  )
}
