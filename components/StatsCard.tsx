interface StatsCardProps {
    title: string
    stats: number
    icon: React.ReactNode
    iconColor: string
}

export function StatsCard({title, stats, icon, iconColor}: StatsCardProps){
    return (
        <div className = "bg-white rounded-lg shadow-md p-6">
            <div className = "flex items-center justify-between ">
                <div>
                    <p className = "text-sm text-gray-600 mb-1">{title}</p>
                    <p className = "text-3xl">{stats}</p>
                </div>
                <div className ={ `${iconColor} text-white p-3 rounded-lg`}>
                    {icon}
                </div>
            </div>
        </div>
    );
}