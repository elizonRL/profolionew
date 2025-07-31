const Skeleton = () => {
    return (
        <>
        <div class="bg-gray-800 p-4 rounded-md animate-pulse m-6">
            <div class="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>

            <div class="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>

            <div class="flex items-center space-x-4">
                <div class="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div class="h-4 bg-gray-700 rounded w-8"></div>

                <div class="h-4 w-px bg-gray-700"></div>

                <div class="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div class="h-4 bg-gray-700 rounded w-8"></div>
            </div>
        </div>
        <div class="bg-gray-800 p-4 rounded-md animate-pulse m-6">
            <div class="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>

            <div class="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>

            <div class="flex items-center space-x-4">
                <div class="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div class="h-4 bg-gray-700 rounded w-8"></div>

                <div class="h-4 w-px bg-gray-700"></div>

                <div class="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div class="h-4 bg-gray-700 rounded w-8"></div>
            </div>
        </div>
        </>
    );
}

export default Skeleton;