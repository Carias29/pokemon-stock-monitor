import { CheckCircle, XCircle, Bell, BellOff, PlaneLanding } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PokemonPack {
    id: number
    name: string
    series: string
    inStock: boolean
    alertEnabled: boolean
    quantity?: number
}

interface PokemonPacksResponse{
    packs: PokemonPack[]
}
const table_header = "px-6 py-3 text-left text-xs text-gray-500 tracking-wider"
export function PackList(){
    //Pack and error handling hooks
    const [packs, setPacks] = useState<PokemonPack[]>([])
    const [loading, setLoading] = useState(true)//if false don't load the table
    const [error, setError] = useState<string | null>(null) //stores/sets error message

    async function fetchPacks(){//request the packs from the backend
        try{
            setError(null)
            setLoading(true)

            //GET backend endpoint
            const result = await fetch("", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                //credentials: "include", //uncomment if you use cookies/sessions
            });
            
            const data : PokemonPacksResponse = await result.json() //PokemonPack[]
            setPacks(data.packs)
            if (!result.ok){
                throw new Error(`Request failed: ${result.status} ${result.statusText}`)
            }
        } catch(err){
            const message = err instanceof Error ? err.message: "Unkown error"
            setError(message)
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPacks()
    }, [])
    const table_data_css = "px-6 py-4 whitespace-nowrap"
    return (
        !error && !loading && (//beginning of table
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
                    <tbody className="bg-white divide-y divide-gray-200">
                        {packs.map((p) =>(
                            <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                                <td className={table_data_css}>
                                    <div className="text-sm">{p.name}</div>
                                </td>
                                <td className={table_data_css}>
                                    <div className="text-sm text-gray-200">{p.series}</div>
                                </td>
                                <td className={table_data_css}>
                                    <div className="font-bold">{p.quantity !== undefined ? p.quantity : "-"}</div>
                                </td>
                                <td className={table_data_css}>
                                    <div className="flex items-center gap-2">{p.inStock ? (
                                        <>
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm text-green-700">In Stock</span>
                                        </>
                                    ): (
                                        <>
                                            <XCircle className = "w-5 h-5 text-red-500" />
                                            <span className="text-sm text-red-700">Out of Stock</span>
                                        </>
                                    )}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )//end of table 
    )
}