import AuthPage from '@/components/AuthPage'
import DashboardClientPage, {
  DashboardLoadingSkeleton,
} from '@/app/client-pages/Dashboard'

export default function Dashboard() {
  return (
    <main className="relative">
      <section>
        <h1 className="sr-only">Dashboard</h1>
        <AuthPage LoadingSkeleton={<DashboardLoadingSkeleton />}>
          <DashboardClientPage />
        </AuthPage>
      </section>
    </main>
  )
}
