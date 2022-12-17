import Card from '@/ui/Card'
import Form from '@/ui/form/Form'

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="my-4 space-y-6">
        <Form />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
