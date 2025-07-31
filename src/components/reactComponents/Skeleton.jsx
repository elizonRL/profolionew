const Skeleton = () => {
    return (
        <>
        <div className="bg-gray-800 p-4 rounded-md animate-pulse m-6">
            <div className="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>

            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>

            <div className="flex items-center space-x-4">
                <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div className="h-4 bg-gray-700 rounded w-8"></div>

                <div className="h-4 w-px bg-gray-700"></div>

                <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div className="h-4 bg-gray-700 rounded w-8"></div>
            </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-md animate-pulse m-6">
            <div className="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>

            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>

            <div className="flex items-center space-x-4">
                <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div className="h-4 bg-gray-700 rounded w-8"></div>

                <div className="h-4 w-px bg-gray-700"></div>

                <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div className="h-4 bg-gray-700 rounded w-8"></div>
            </div>
        </div>
        </>
    );
}

export default Skeleton;