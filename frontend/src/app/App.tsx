import { HomePage } from '@/pages/home'
import { StoreProvider } from './providers/StoreProvider'

export function App() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  )
}
