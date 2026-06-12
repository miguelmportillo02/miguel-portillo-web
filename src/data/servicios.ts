import type { LucideIcon } from 'lucide-react'
import { Zap, Hammer, Factory, PaintRoller, Wrench } from 'lucide-react'

export interface Servicio {
  id: string
  icon: LucideIcon
  color: string
  titulo: string
  items: string[]
  /** Ruta de la imagen en /public */
  image: string
  /** Texto alternativo (SEO) que describe la imagen */
  imageAlt: string
}

// Contenido transcrito tal cual del brief (Sección 04), sin modificaciones.
export const servicios: Servicio[] = [
  {
    id: 'electricidad',
    icon: Zap,
    color: '#E85D1A',
    titulo: 'Electricidad',
    image: '/electricidad.png',
    imageAlt:
      'Servicios de electricidad residencial e industrial en Santa Ana, El Salvador — instalaciones, circuitos especiales y diagnóstico de fallas por Miguel Portillo',
    items: [
      'Remodelación de sistemas eléctricos',
      'Instalación residencial',
      'Instalación industrial',
      'Instalación de luminarias industriales y residenciales',
      'Circuitos especiales 220/480V',
      'Diagnóstico de fugas de corriente (recibos altos)',
      'Detección de fallas (parpadean luces o se disparan los dados)',
    ],
  },
  {
    id: 'remodelaciones',
    icon: Hammer,
    color: '#0D1B3E',
    titulo: 'Remodelaciones',
    image: '/remodelaciones.png',
    imageAlt:
      'Remodelaciones de baños, cuartos, tabla roca y cielo falso PVC en Santa Ana, El Salvador — Miguel Portillo',
    items: [
      'Remodelación de baños',
      'Instalación de tabla roca en paredes y techos',
      'Remodelación de cuartos (ventanas, puertas, closet, baños)',
      'Cielo falso PVC',
      'Cielo falso tipo loceta galaxy',
    ],
  },
  {
    id: 'estructuras-metalicas',
    icon: Factory,
    color: '#7B8FA1',
    titulo: 'Estructuras Metálicas',
    image: '/estructuras-metalicas.png',
    imageAlt:
      'Fabricación de estructuras metálicas, bodegas, portones, balcones y pérgolas en Santa Ana, El Salvador — Miguel Portillo',
    items: [
      'Fabricación de estructura metálica',
      'Fabricación de bodegas',
      'Entechado industriales y residenciales',
      'Fabricación de pérgolas metálicas',
      'Fabricación de balcones',
      'Fabricación de portones',
      'Fabricación de puertas metálicas (puerta balcón y sólida)',
    ],
  },
  {
    id: 'pintura',
    icon: PaintRoller,
    color: '#2E6B47',
    titulo: 'Pintura',
    image: '/pintura.png',
    imageAlt:
      'Servicios de pintura interior y exterior, impermeabilizante y anticorrosivo en Santa Ana, El Salvador — Miguel Portillo',
    items: [
      'Pintura de exterior',
      'Aplicación de impermeabilizante',
      'Aplicación de anticorrosivo',
      'Pintura interior residencial e industrial',
    ],
  },
  {
    id: 'servicios-adicionales',
    icon: Wrench,
    color: '#6B4FB6',
    titulo: 'Servicios Adicionales',
    image: '/servicios-adicionales.png',
    imageAlt:
      'Servicios adicionales de carpintería y fontanería en Santa Ana, El Salvador — Miguel Portillo',
    items: [
      'Carpintería (con solicitud de anticipación)',
      'Fontanería (con solicitud de anticipación)',
    ],
  },
]
