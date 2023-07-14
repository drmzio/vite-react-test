import { useParams } from '@tanstack/router'

export default function UserProfile() {
  const { userId } = useParams();

  console.log('userId', userId);

  return (
    <div>{userId}</div>
  )
}