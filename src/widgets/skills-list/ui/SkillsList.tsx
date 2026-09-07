import { SkillCard, useGetSkillsQuery } from '@/entities/skill'
import styles from './SkillsList.module.scss'

export function SkillsList() {
  const { data: skills, isLoading, isError } = useGetSkillsQuery()

  if (isLoading) {
    return <p className={styles.status}>Загрузка навыков...</p>
  }

  if (isError) {
    return <p className={styles.error}>Не удалось загрузить навыки</p>
  }

  if (!skills?.length) {
    return <p className={styles.status}>Навыки пока не добавлены</p>
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Навыки</h2>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
    </section>
  )
}
