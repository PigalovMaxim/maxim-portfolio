import { SkillsList } from '@/widgets/skills-list'
import styles from './HomePage.module.scss'

export function HomePage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        Maxim<span>-portfolio</span>
      </h1>
      <SkillsList />
    </main>
  )
}
