import { Icons } from './icons'
import Image from 'next/image'

const items = [
  {
    title: 'Página Inicial',
    url: '#',
    icon: <Icons.home />,
  },
  {
    title: 'Clientes',
    url: '#',
    icon: <Icons.clients />,
  },
  {
    title: 'Agenda',
    url: '#',
    icon: <Icons.calendar />,
  },
  {
    title: 'Financeiro',
    url: '#',
    icon: <Icons.financial />,
  },
]

export function AppSidebar() {
  return (
    <div className="h-dvh w-[242px] shrink-0 border-r p-5">
      <div className="space-y-16">
        <div className="flex items-center gap-2">
          <Image
            src="/user.png"
            width={20}
            height={20}
            alt="Foto do usuário Marcelo Cavalcante"
          />

          <p className="font-semibold">Marcelo Cavalcante</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <a
              className="flex items-center gap-1.5"
              href={item.url}
              key={item.title}
            >
              {item.icon}
              <span className="font-semibold">{item.title}</span>
            </a>
          ))}
        </div>

        <div className="space-y-2">
          <a className="flex items-center gap-1.5" href="#">
            <Icons.registrations />
            <span className="font-semibold">Cadastros</span>
          </a>
          <span className="text-primary ml-10 font-semibold">Rotinas</span>
        </div>
      </div>
    </div>
  )
}
