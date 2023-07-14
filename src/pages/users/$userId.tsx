import { useParams } from '@tanstack/router'
import { useEffect } from 'react';

export default function UserProfilePage() {
  const { userId } = useParams();

  useEffect(() => {
    console.log('userId', userId);
  }, [userId]);

  return (
    <div>{userId}</div>
  )
}