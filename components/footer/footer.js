import { GrFacebookOption } from "react-icons/gr"
import { IoLogoTwitter } from "react-icons/io5"
import { IoLogoYoutube } from "react-icons/io5"
import Image from 'next/image'

export default function Footer(){
    return(
        <>
          <div className="flex px-96 py-16 primary-back">
              <div className="text-white">
                Qui-sommes-nous ? <br></br>
                Le mot du Ministre <br></br>
                Le mot du Président <br></br>
                Actualités Evénements 
              </div>
              <div className="text-white">
                Notre histoire<br></br>
                Les sections<br></br>
                Les médailles<br></br>
                Comment adhérer ?<br></br>
                Mentions légales et crédits
              </div>
              <div className="flex">
                  <div>
                    <IoLogoTwitter className="text-white text-2xl"/>
                  </div>
                  <div>
                    <GrFacebookOption className="text-white text-2xl"/>
                  </div>
                  <div>
                    <IoLogoYoutube className="text-white text-2xl"/>
                  </div>
              </div>
              <div>
                  <div className="flex">
                    <div>
                        Inscrivez-vous à notre newsletter
                    </div>
                    <div>
                        <input type='email' placeholder='Email'/>
                    </div>
                  </div>
                  <div className="flex">
                      <div>
                        <input type='checkbox'/>
                      </div>
                      <div>
                        J’ai pris connaissance de la Politique de confidentialité de 
                        la KAMONA.   Je peux me desinscrire à tout moment à l’aide 
                        des liens de desinscription  ou en contactant la KAMONA 
                        à l’adresse desinscription@kamona.fr
                      </div>
                      <div>
                        <button>OK</button>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}