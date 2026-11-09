'use client'
import { useEffect, useRef, useState } from 'react'

const data = [
  {v: 1681, label: 'Paket Ujian'},
  {v: 21005, label: 'Jumlah Soal'},
  {v: 1989, label: 'Pengguna'},
  {v: 98, label: 'Kepuasan', suffix: '%'}
]

export default function Stats() {
  const [counts, setCounts] = useState(data.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Animate each counter
          data.forEach((item, index) => {
            const duration = 1200 // ms
            const steps = 60
            const increment = item.v / steps
            let current = 0
            
            const timer = setInterval(() => {
              current += increment
              if (current >= item.v) {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = item.v
                  return newCounts
                })
                clearInterval(timer)
              } else {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.round(current)
                  return newCounts
                })
              }
            }, duration / steps)
          })
          
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section className="stats">
      <div className="w sg" ref={ref}>
        {data.map((item, i) => (
          <div key={i} className="st">
            <div className="num">
              <b>
                {counts[i].toLocaleString('id-ID')}
              </b>
              {!item.suffix && <i>+</i>}
              {item.suffix && <i>{item.suffix}</i>}
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
