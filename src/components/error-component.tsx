import { BookX } from 'lucide-react'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './ui/empty'

export const ErrorComponent = () => {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BookX />
        </EmptyMedia>
        <EmptyTitle>No se encontraron definiciones para la palabra</EmptyTitle>
        <EmptyDescription>
          Vuelve a intentarlo con una palabra diferente o verifica que esté bien
          escrita.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
