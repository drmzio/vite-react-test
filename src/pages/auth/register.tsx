import { Link } from '@tanstack/router';

export default function RegisterPage() {
  return (
    <div>
      <h3>REGISTER</h3>
      <Link to="/auth/login">Login</Link>
    </div>
  )
}