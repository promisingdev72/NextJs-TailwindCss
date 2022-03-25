import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import LeftBack from '../public/images/leftback.png'
import RightBack from '../public/images/rightBack.png'
import LeftQuote from '../public/images/leftquote.png'
import RightQuote from '../public/images/rightquote.png'
import Avatar1 from '../public/images/avartar1.png'
import Avatar2 from '../public/images/avartar2.png'
import GreenHouse from '../public/images/greenhouse.png'
import Fields from '../public/images/fields.png'
import Map from '../public/images/map.png'
import Medal from '../public/images/medal.png'
import Dangi from '../public/images/dangi.png'
import Forest from '../public/images/forest.png'
import Phone from '../public/images/phone.png'
import Message from '../public/images/message.png'
import Location from '../public/images/location.png'

export default function HomePage() {
    return(
        <>
            <Layout>
                <Head>
                    <title>Home Page</title>
                </Head>
                <Header/>
                <div className="flex">
                    <div className="">
                        <Image src={LeftBack}/>
                    </div>
                    <div className="relative">
                        <Image src={RightBack}/>
                        <div className="absolute top-20 left-20">
                            <div className="text-7xl text-white font-BarlowCondensedRegular">
                                Association des Membres <br></br> de la Confrérie Agricole 
                            </div>
                            <div>
                                <button className="text-white text-4xl top-btn px-4 py-5 mt-7 font-BarlowCondensedRegular">Qui sommes-nous ?</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-32">
                    <div className="grid gap-4 grid-cols-2 py-14 border-b-4 border-gray-400">
                        <div className="flex relative w-full">
                            <div className='flex z-10'>
                                <Image src={LeftQuote}/>
                            </div>
                            <div className='absolute right-0 flex justify-center items-center'>
                                <Image src={Avatar1}/>
                                <div className='ml-6 text-6xl primary-color font-BarlowCondensedRegular'>Le mot du Président</div>
                            </div>
                        </div>
                        <div className="flex relative w-full">
                            <div className='flex justify-center items-center z-10'>
                                <Image src={Avatar2}/>
                                <div className='ml-6 text-6xl primary-color font-BarlowCondensedRegular'>Le mot du Directeur</div>
                            </div>
                            <div className='absolute right-12'>
                                <Image src={RightQuote}/>
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-4 grid-cols-8 py-14 border-b-4 border-gray-400'>
                        <div className='col-span-3'>
                            <div className='pro-color text-7xl font-BarlowCondensedRegular mb-4'>Actualités</div>
                            <div className='text-xl date-color font-BarlowCondensedRegular'>15 mars 2022</div>
                            <div className='text-3xl primary-color font-BarlowBold'>
                                Et harumd dereud facilis facer possim omnis es 
                                voluptas assumenda est, omnis dolor reppelend. 
                            </div>
                        </div>
                        <div className='flex col-span-5'>
                            <div className='justify-center items-center flex w-full'>
                                <Image src={GreenHouse}/>
                            </div>
                            <div className=''>
                                <div className='pro-color text-7xl font-BarlowCondensedRegular mb-4'>Événements</div>
                                <div className='text-xl date-color font-BarlowCondensedRegular'>15 mars 2022</div>
                                <div className='text-3xl primary-color font-BarlowBold'>
                                    Et harumd dereud facilis facer possim omnis es 
                                    voluptas assumenda est, omnis dolor reppelend. 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center py-7'>
                        <Image src={Fields}/>
                        <div className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2'>
                            <div className='text-7xl text-white font-BarlowCondensedRegular text-center'>Notre histoire</div>
                            <div className='text-xl text-white font-BarlowCondensedRegular text-center'>
                                At vero eos et accusam et justo odio dignissim qui blandi 
                                praesent lupatum delinit aigue duos dolor et molestais 
                                exceptur sint occaecat cupidat non provident, simil 
                                tempor sunt in culpa qui officia deserunt mollit anim 
                                id est laborum et dolor fugai. Et ha
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='flex'>
                            <Image src={Map}/>
                        </div>
                        <div className='py-16 px-14 primary-back'>
                            <div className='text-white text-7xl text-center font-BarlowCondensedRegular mb-4'>
                                Les médailles
                            </div>
                            <div className='text-white text-2xl text-center font-BarlowCondensedRegular'>
                                Blé, maïs, vigne et olivier <br></br>
                                À l’origine, le projet de l’insigne est très proche de celui de la Légion d’honneur. <br></br><br></br>
                                Mais il n’est pas retenu et l’insigne de chevalier qui voit le jour consiste en une <br></br>
                                étoile double face à six rayons émaillés de blanc, reposant sur une couronne <br></br> 
                                constituée d’épis de blé et de maïs. <br></br><br></br>
                                Les croix d’officier et de commandeur sont surmontées d’une bélière formée <br></br>
                                de feuilles de vigne et d’olivier. <br></br><br></br>
                                À l’avers, le médaillon central présente une effigie de la République et porte au <br></br> 
                                revers l’inscription «Mérite agricole 1883».<br></br><br></br>
                                Quant au ruban, il est moiré vert avec, de chaque côté, un liseré moiré rouge <br></br> 
                                en référence à la Légion d’honneur. Ce ruban est agrémenté d’une rosette pour <br></br>
                                signaler le grade d’officier dans l’Ordre, et un ruban « cravate » permet de <br></br> 
                                porter en sautoir l’insigne de commandeur.
                            </div>
                            <div className='p-14'>
                                <Image src={Medal}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col p-20'>
                        <div className='mb-8'>
                            <div className='relative'>
                                <Image src={Dangi}/>
                                <div className='w-full text-7xl text-right font-BarlowCondensedRegular text-white absolute right-0 bottom-1/2 translate-x-0 translate-y-1/2 pr-36'>Comment adhérer ?</div>
                            </div>
                        </div>
                        <div className='text-center second-color text-2xl font-BarlowCondensedRegular'>
                            At vero eos et accusam et justo odio dignissim qui blandi praesent lupatum delinit aigue duos <br></br> 
                            dolor et molestais exceptur sint occaecat cupidat non provident, simil tempor sunt in culpa <br></br> 
                            qui officia deserunt mollit anim id est laborum et dolor fugai. 
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center relative'>
                    <div>
                        <Image src={Forest}/>
                    </div>
                    <div className='absolute'>
                        <div className='flex items-center mb-4'>
                            <div>
                                <Image src={Phone}/>
                            </div>
                            <div className='text-2xl text-white ml-4 font-BarlowBold'>
                                kamona.sg@ kamona.fr
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div>
                                <Image src={Message}/>
                            </div>
                            <div className='text-2xl text-white ml-4 font-BarlowBold'>
                                Tél: 01 46 54 89 71
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div>
                                <Image src={Location}/>
                            </div>
                            <div className='text-2xl text-white ml-4 font-BarlowBold'>
                                KAMONA <br></br>
                                78 rue de Rambuteau <br></br>
                                75529 PARIS 04
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
            
        </>    
    )
}
