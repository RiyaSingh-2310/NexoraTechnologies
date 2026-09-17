import {
  Brain,
  Briefcase,
  Cloud,
  Compass,
  Cpu,
  Globe,
  Handshake,
  HeartHandshake,
  Layers,
  LifeBuoy,
  Palette,
  Receipt,
  RefreshCw,
  Rocket,
  Shield,
  Smartphone,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  palette: Palette,
  cloud: Cloud,
  brain: Brain,
  compass: Compass,
  refresh: RefreshCw,
  shield: Shield,
  users: Users,
  layers: Layers,
  cpu: Cpu,
  zap: Zap,
  heartHandshake: HeartHandshake,
  rocket: Rocket,
  receipt: Receipt,
  lifeBuoy: LifeBuoy,
  briefcase: Briefcase,
  handshake: Handshake,
}

type IconName = keyof typeof iconMap

type Props = {
  name: string
  className?: string
  'aria-hidden'?: boolean
}

export function Icon({ name, className, ...rest }: Props) {
  const Comp = iconMap[name as IconName] ?? Globe
  return <Comp className={className} aria-hidden={rest['aria-hidden'] ?? true} />
}
