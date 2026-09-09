import type { Skill } from '../model/types'
import styles from './SkillCard.module.scss'

type SkillCardProps = {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.name}>{skill.name}</span>
      <span className={styles.category}>{skill.category}</span>
    </article>
  )
}
