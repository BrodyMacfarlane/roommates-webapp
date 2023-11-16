import AuthPage from '@/components/AuthPage'
import TasksClientPage, { TasksLoadingSkeleton } from '@/app/client-pages/Tasks'

export default function Tasks() {
  return (
    <main className="relative">
      <section>
        <h1 className="sr-only">Tasks</h1>
        <AuthPage LoadingSkeleton={<TasksLoadingSkeleton />}>
          <TasksClientPage />
        </AuthPage>
      </section>
    </main>
  )
}
