import { useCountUp } from '../hooks.js'
import { formatCurrency } from '../utils/format.js'

export default function CountUpValue({ value }) {
  const animated = useCountUp(value)
  return <span className="count-up">{formatCurrency(animated)}</span>
}
