import { CheckCircle, XCircle, Bell, BellOff } from 'lucide-react';

interface PokemonPack {
    id: number
    name: string
    series: string
    inStock: boolean
    alertEnabled: boolean
    quantity?: number
}

interface PackListProps{
    packs: PokemonPack[]
}

export function PackList({packs}: PackListProps){
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div>

        </div>
    </div>
}