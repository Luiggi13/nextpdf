import Link from 'next/link';
import { itemsMenu } from '../types/itemsMenu.type';

export default function ItemsMenu() {
    const menus: itemsMenu[] = [
            {
                link: "/upload",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Upload 02"><path id="icon" d="M8.1475 12.6968L9.99935 10.8333L11.8512 12.6968M9.99935 17.5V10.8795M5.36972 13.6805H4.92701C3.12601 13.6805 1.66602 12.2205 1.66602 10.4196C1.66602 8.61855 3.12601 7.15855 4.92701 7.15855V7.15855C5.17151 7.15855 5.36753 6.95973 5.39031 6.71629C5.61168 4.35087 7.59071 2.5 9.99935 2.5C12.5562 2.5 14.629 4.5857 14.629 7.15855H15.0717C16.8727 7.15855 18.3327 8.61855 18.3327 10.4196C18.3327 12.2205 16.8727 13.6805 15.0717 13.6805H14.629" stroke="#6B7280" strokeWidth="2.6" strokeLinecap="round" /></g></svg>',
                text: "Upload"
            },
            {
                link: "/compress",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Upload 02"><path id="icon" d="M8.1475 12.6968L9.99935 10.8333L11.8512 12.6968M9.99935 17.5V10.8795M5.36972 13.6805H4.92701C3.12601 13.6805 1.66602 12.2205 1.66602 10.4196C1.66602 8.61855 3.12601 7.15855 4.92701 7.15855V7.15855C5.17151 7.15855 5.36753 6.95973 5.39031 6.71629C5.61168 4.35087 7.59071 2.5 9.99935 2.5C12.5562 2.5 14.629 4.5857 14.629 7.15855H15.0717C16.8727 7.15855 18.3327 8.61855 18.3327 10.4196C18.3327 12.2205 16.8727 13.6805 15.0717 13.6805H14.629" stroke="#6B7280" strokeWidth="2.6" strokeLinecap="round" /></g></svg>',
                text: "Compress"
            },
            {
                link: "/processed",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Upload 02"><path id="icon" d="M8.1475 12.6968L9.99935 10.8333L11.8512 12.6968M9.99935 17.5V10.8795M5.36972 13.6805H4.92701C3.12601 13.6805 1.66602 12.2205 1.66602 10.4196C1.66602 8.61855 3.12601 7.15855 4.92701 7.15855V7.15855C5.17151 7.15855 5.36753 6.95973 5.39031 6.71629C5.61168 4.35087 7.59071 2.5 9.99935 2.5C12.5562 2.5 14.629 4.5857 14.629 7.15855H15.0717C16.8727 7.15855 18.3327 8.61855 18.3327 10.4196C18.3327 12.2205 16.8727 13.6805 15.0717 13.6805H14.629" stroke="#6B7280" strokeWidth="2.6" strokeLinecap="round" /></g></svg>',
                text: "Processed"
            }
        ]
    return (menus.map((menu, index) => {
        return (
            <li key={index}>
                <Link href={menu.link}>
                    <div className="flex-col flex px-3 py-1 bg-white rounded-lg">
                        <div className="h-5 gap-3 flex">
                            <div className="relative">
                                <div dangerouslySetInnerHTML={{ __html: menu.icon }}></div>
                            </div>
                            <h2 className="text-gray-500 text-sm font-medium leading-snug">{menu.text}</h2>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
    )
}
