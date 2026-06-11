export interface Reconocimiento {
  id: number
  titulo: string
  instructor: string
  emisor?: string
}

// Certificaciones técnicas de Miguel Portillo.
export const reconocimientos: Reconocimiento[] = [
  {
    id: 1,
    titulo: 'Técnico en Servicios Eléctricos Industriales',
    instructor: 'Ing. Lorenzo Henríquez',
  },
  {
    id: 2,
    titulo: 'Técnico en Servicios Eléctricos Residenciales',
    instructor: 'Ing. David Torres',
    emisor: 'MT Servicios',
  },
  {
    id: 3,
    titulo: 'Técnico en Servicios Eléctricos en Circuitos Especiales',
    instructor: 'Ing. Carlos Cuéllar',
  },
]
