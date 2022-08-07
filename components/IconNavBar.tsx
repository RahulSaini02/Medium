import { HomeIcon, SearchIcon, UserCircleIcon, BellIcon, BookmarkIcon, PencilAltIcon, NewspaperIcon } from '@heroicons/react/outline'

export const IconNavBar = () => {
    return (
        <div className='flex lg:flex-col items-center justify-around lg:justify-center lg:space-y-10 h-full w-full text-slate-500'>
            <HomeIcon className='h-7 w-7 cursor-pointer' />
            <SearchIcon className='h-7 w-7 cursor-pointer lg:hidden' />
            <UserCircleIcon className='h-7 w-7 cursor-pointer lg:hidden' />
            <BellIcon className='hidden h-7 w-7 cursor-pointer lg:inline-flex' />
            <BookmarkIcon className='hidden h-7 w-7 cursor-pointer lg:inline-flex' />
            <NewspaperIcon className='hidden h-7 w-7 cursor-pointer lg:inline-flex' />
            <hr className='hidden h-0.5 w-10 bg-slate-300 lg:inline-flex' />
            <PencilAltIcon className='hidden h-7 w-7 cursor-pointer lg:inline-flex' />
        </div>
    )
}
