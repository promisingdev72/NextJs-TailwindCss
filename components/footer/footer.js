import { GrFacebookOption } from "react-icons/gr"
import { IoLogoTwitter } from "react-icons/io5"
import { IoLogoYoutube } from "react-icons/io5"
import Image from 'next/image'

export default function Footer(){
    return(
        <>
          <div className="px-12 py-2 xl:px-60 lg:py-16 primary-back">
            <div className="lg:px-0 px-3 border-b-2 border-white block lg:flex lg:py-4 py-0 w-full justify-between">
                <div className="text-white text-lg font-BarlowCondensedRegular">
                  <div>Qui-sommes-nous ?</div>
                  <div>Le mot du Ministre</div>
                  <div>Le mot du Président</div>
                  <div>Actualités</div>
                  <div>Evénements </div>
                </div>
                <div className="text-white text-lg font-BarlowCondensedRegular lg:ml-8 ml-0">
                  <div>Notre histoire</div>
                  <div>Les sections</div>
                  <div>Les médailles</div>
                  <div>Comment adhérer ?</div>
                  <div>Mentions légales et crédits</div>
                </div>
                <div className="flex items-end mx-8 lg:mt-0 mt-5 lg:mb-0 mb-5 justify-center">
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
                    <div className="block lg:flex items-center justify-center">
                      <div className="text-white text-lg font-BarlowBold lg:mb-0 mb-3">
                          Inscrivez-vous à notre newsletter
                      </div>
                      <div className="lg:ml-4 ml-0">
                          <input type='email' placeholder='Email' className="outline-none w-64 p-1.5"/>
                      </div>
                    </div>
                    <div className="flex lg:mt-4 mt-5">
                        <div className="lg:mr-4 mr-2">
                          <input type='checkbox'/>
                        </div>
                        <div className="text-white text-base font-BarlowCondensedRegular">
                          J’ai pris connaissance de la <u>Politique de confidentialité</u>de 
                          la KAMONA.<br></br>
                          Je peux me desinscrire à tout moment à l’aide 
                          des liens de desinscription <br></br>  
                          ou en contactant la KAMONA à l’adresse desinscription@kamona.fr
                        </div>
                        <div className="lg:ml-4 ml-1">
                          <button className="lgs:p-4 p-2 text-white font-BarlowBold text-lg lg:text-xl third-color">OK</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}