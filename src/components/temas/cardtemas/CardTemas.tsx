import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#c38b99]  text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-sky-50 h-full'>{tema.descricao}</p>
            
            <div className="flex"> 
            <Link to={`/editartema/${tema.id}`}
	className='w-full text-slate-100 bg-[#d9a7b3] hover:bg-[#b77384]
    flex items-center justify-center py-2'>
	<button>Editar</button>
</Link>

<Link to={`/deletartema/${tema.id}`} 
	className='text-slate-100 bg-[#c88b99]  hover:bg-rose-200 w-full 
		flex items-center justify-center'>
	<button>Deletar</button>
</Link>
            </div>

        </div>
    )
}

export default CardTemas