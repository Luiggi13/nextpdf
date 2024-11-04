import Image from 'next/image';
import ItemsMenu from './ItemsMenu';

export default function SideBarMenu() {
    return (
        <div className="w-96 p-4 bg-white flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-full justify-between items-center gap-2.5 inline-flex">
                <a href="#">
                    <Image src="https://pagedone.io/asset/uploads/1701235273.png" alt="Pagedone logo image" width={130} height={34} priority={true} />
                </a>
                <a href="#" className="w-6 h-6 relative bg-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Menu">
                            <rect width="24" height="24" fill="white" />
                            <path id="icon" d="M13 6H21M3 12H21M7 18H21" stroke="#1F2937" strokeWidth="1.6" strokeLinecap="round" />
                        </g>
                    </svg>
                </a>
            </div>
            <div className="w-full">
                <div className="w-full h-8 px-3 items-center flex">
                    <h6 className="text-gray-500 text-xs font-semibold leading-4">MENU</h6>
                </div>
                <ul className="flex-col gap-1 flex">
                    <ItemsMenu />
                </ul>
            </div>
            {/* <div className="col-span-2 p-4 sm:ml-16 w-full h-full md:block hidden">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
          </div>
          <div className="flex items-center justify-center h-40 mb-4 rounded bg-gray-50 dark:bg-gray-800"></div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
          </div>
          <div className="flex items-center justify-center h-40 mb-4 rounded bg-gray-50 dark:bg-gray-800"></div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
          </div>
        </div>
      </div> */}
            {/* <div classNameName="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
        <div classNameName="text-white">
        <h1 classNameName="text-4xl font-bold">🚀 Coming Soon 🚀</h1>
        <p classNameName="mt-4 text-lg">We are working on something awesome!</p>
        </div>
        </div> */}
        </div>
    )
}
