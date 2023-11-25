'use client'

import { motion } from 'framer-motion'

import HeroPicture from '../HeroPicture'

import styles from './heroesList.module.scss'

import { spiderManFont } from '@/fonts'
import { IHeroData } from '@/interfaces/heroes'

interface Iprops {
  heroes: IHeroData[]
}

export default function HeroesList({ heroes }: Iprops) {
  return (
    <>
      <motion.h1
        className={`${spiderManFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Personagens
      </motion.h1>
      <motion.section
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
          >
            <HeroPicture hero={hero} />
          </div>
        ))}
      </motion.section>
    </>
  )
}
