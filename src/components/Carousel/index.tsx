'use client'

import { useEffect, useState } from 'react'

import HeroDetails from '../HeroDetails'
import HeroPicture from '../HeroPicture'

import styles from './carousel.module.scss'

import { IHeroData } from '@/interfaces/heroes'

interface IProps {
  heroes: IHeroData[]
  activeId: string
}

export default function Carousel({ heroes, activeId }: IProps) {
  const [visibleItems, setVisibleItems] = useState<IHeroData[] | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activeId)
  )

  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length
    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    )
    setVisibleItems(visibleItems)
  }, [heroes, activeIndex])

  // Altera herói ativo no carrossel
  // +1 rotaciona no sentido horário
  // -1 rotaciona no sentido anti-horário
  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection)
  }

  if (!visibleItems) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onClick={() => handleChangeActiveIndex(1)}
        >
          {visibleItems.map((item) => (
            <div key={item.id} className={styles.hero}>
              <HeroPicture hero={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <HeroDetails data={heroes[0]} />
      </div>
    </div>
  )
}
