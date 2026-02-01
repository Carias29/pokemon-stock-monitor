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
const table_header = "px-6 py-3 text-left text-xs text-gray-500 tracking-wider"
export function PackList(){
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className={table_header}>PACK NAME</th>
                        <th className={table_header}>SERIES</th>
                        <th className={table_header}>QUANTITY</th>
                        <th className={table_header}>STATUS</th>
                        <th className={table_header}>ALERT</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}