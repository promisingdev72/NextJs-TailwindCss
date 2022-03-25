import { GrFacebookOption } from "react-icons/gr"
import { IoLogoTwitter } from "react-icons/io5"
import { IoLogoYoutube } from "react-icons/io5"
import Image from 'next/image'

export default function Footer(){
    return(
        <>
          <div className="px-60 py-16 primary-back">
            <div className="border-b-2 border-white flex py-4 w-full justify-between">
              <div className="text-white flex text-lg font-BarlowCondensedRegular">
                  Qui-sommes-nous ? <br></br>
                  Le mot du Ministre <br></br>
                  Le mot du Président <br></br>
                  Actualités <br></br>
                  Evénements 
                </div>
                <div className="text-white flex text-lg font-BarlowCondensedRegular ml-8">
                  Notre histoire<br></br>
                  Les sections<br></br>
                  Les médailles<br></br>
                  Comment adhérer ?<br></br>
                  Mentions légales et crédits
                </div>
                <div className="flex items-end mx-8">
                    <div className="mr-8">
                      <IoLogoTwitter className="text-white text-2xl"/>
                    </div>
                    <div className="mr-8">
                      <GrFacebookOption className="text-white text-2xl"/>
                    </div>
                    <div className="mr-8">
                      <IoLogoYoutube className="text-white text-2xl"/>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center">
                      <div className="text-white text-lg font-BarlowBold">
                          Inscrivez-vous à notre newsletter
                      </div>
                      <div className="ml-4">
                          <input type='email' placeholder='Email' className="outline-none w-64 p-1.5"/>
                      </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-4">
                          <input type='checkbox'/>
                        </div>
                        <div className="text-white text-base font-BarlowCondensedRegular">
                          J’ai pris connaissance de la <u>Politique de confidentialité</u>de 
                          la KAMONA.<br></br>
                          Je peux me desinscrire à tout moment à l’aide 
                          des liens de desinscription <br></br>  
                          ou en contactant la KAMONA à l’adresse desinscription@kamona.fr
                        </div>
                        <div className="ml-4">
                          <button className="p-4 text-white font-BarlowBold text-xl third-color">OK</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}