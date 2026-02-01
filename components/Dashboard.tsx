import { Package, Bell, TrendingUp} from 'lucide-react'
import { StatsCard } from './StatsCard'
import { PackList } from './PackList'

export function Dashboard(){
    return(
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
            <h1 className="text-3xl mb-2">Pokemon Stock Dashboard</h1>
            <p className="text-gray-400">Track your Pokemon pack inventory and alerts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard 
                title="Tracked packs"
                stats={0}
                icon={<Package className="w-6 h-6"/>}
                iconColor="bg-blue-500"
            />
            <StatsCard
                title="Packs In Stock"
                stats={0}
                icon={<Bell className="w-6 h-6"/>}
                iconColor="bg-green-500"
            />
            <StatsCard
                title="Alerts Active"
                stats={0}
                icon={<TrendingUp className="w-6 h-6"/>}
                iconColor='bg-orange-500'
            />
        </div>
        <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl">Tracked Pokemon Packs</h2>
            </div>
            <PackList />
        </div>
    </div>
    );
}

