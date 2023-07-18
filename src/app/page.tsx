"use client";
import SearchBar from '../components/SearchBar';
import TreeDetails from '../components/treeDetails';
import Image from "next/image";

// const treeProps={
//     id: '000182',
//     name: 'Swietenia Mahogoni',
//     datePlanted: '000182',
//     donor: 'Mr. X',
//     landOwner: 'Mr. Y',
//     location: 'Gilatala, Khulna',
//     landType: 'Household Yard',
//     image: './tree.jpeg'
// }

export default function Home() {
    return (
<div className='flex flex-col justify-center items-center'>
             <SearchBar />
        <TreeDetails 
        id='000182'
        name='Swietenia Mahogoni'
        datePlanted='000182'
        donor='Mr. X'
        landOwner='Mr. Y'
        location='Gilatala, Khulna'
        landType='Household Yard'
        image='./tree.jpeg'
        />
    </div>
    )
    }

// export default function Home() {
//     return (
//         <div className='flex flex-col justify-center items-center'>
//             <SearchBar />
//             <div className='flex flex-row justify-center py-16 w-1/2'>
//                 <div className='flex flex-col relative rounded-lg overflow-hidden'>
//                     <img src='/tree.jpeg' alt='Tree' className='' />

//                     <div className='absolute bottom-0 inset-x-0 px-4 pb-2 pt-8 bg-gradient-to-t from-black/80 to-black/0 flex justify-between items-end text-white'>


//                         <span>tree id</span>
//                         <span>tree name</span>
//                     </div>
//                 </div>

//                 <div className='flex flex-col'>
//                     <p className='font-bold text-2xl text-slate-800 pl-16'>Tree details</p>
//                     <div className='flex flex-row'>
//                         <div className='flex flex-col pl-16 pt-5'>
//                             <p className='font-bold text-sm text-slate-800 py-2'>ID</p>
//                             <p className='font-bold text-sm text-slate-800 py-2'>Specis</p>
//                             <p className='font-bold text-sm text-slate-800 py-2'>Date Planted</p>
//                             <p className='font-bold text-sm text-slate-800 py-2'>Donor</p>
//                             <p className='font-bold text-sm text-slate-800 py-2'>Land Owner</p>
//                             <p className='font-bold text-sm text-slate-800 py-2'>Location</p>
//                             <p className='font-bold text-sm text-slate-800 py-2'>Land Type</p>
//                         </div>


//                         <div className='flex flex-col  pt-5'>

//                             <p className=' text-sm text-slate-600 pl-16 py-2'>000182</p>
//                             <p className=' text-sm text-slate-600 pl-16 py-2 italic'>Swietenia Mahogoni</p>
//                             <p className=' text-sm text-slate-600 pl-16 py-2'>000182</p>
//                             <p className=' text-sm text-slate-600 pl-16 py-2'>Mr. X</p>
//                             <p className=' text-sm text-slate-600 pl-16 py-2'>Mr. Y</p>
//                             <p className=' text-sm text-slate-600 pl-16 py-2'>Gilatala, Khulna</p>
//                             <p className=' text-sm text-slate-600 pl-16 py-2'>Household Yard</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// }