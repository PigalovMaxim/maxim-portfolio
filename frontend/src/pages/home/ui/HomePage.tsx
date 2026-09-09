import { useLazyGetStatsQuery } from '@/shared/api'
import { SkillsList } from '@/widgets/skills-list'
import styles from './HomePage.module.scss'

export function HomePage() {
  const [fetchStats] = useLazyGetStatsQuery()

  const handleStats = async () => {
    const result = await fetchStats()
    alert(JSON.stringify(result.data, null, 2))
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        Maxim<span>-portfolio</span>
      </h1>
      <SkillsList />
      <button className={styles.statsButton} onClick={handleStats}>
        Get Stats
      </button>
    </main>
  )
}
