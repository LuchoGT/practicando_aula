import { useAuthStore } from '@/hooks/useAuthStore';

export const DashboardPage = () => {


  const {user} = useAuthStore();
  return (
    <main>
      <section>
        {/* <h1>¡Hola {username}!</h1> */}
        <h1>¡Hola {user.username} ctmre!</h1>
      </section>
    </main>
  )
}
