import { Link } from '@tanstack/router';

export default function LoginPage() {
  return (
    <div>
      <h3>LOGIN</h3>
      <Link to="/auth/register">Register</Link>
    </div>
  )
}