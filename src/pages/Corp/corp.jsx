import React from "react";
import Roll from "../../components/Roll/roll";
import imgYannick from "../../assets/Yannick.jpg";
import imgCRPCR from "../../assets/LogoPP.jpg";
import imgAPERCORA from "../../assets/ApercoraLogo.jpg";

const Corp = () => {
    return (
        <div className="Corp">
            <div className="placement-roll">
                <Roll
                    className="img-bottom-right"
                    img={imgYannick}
                    titletop="Yannick Tancray"
                    content="qodsfyuhqsdmkloifjSODÏFJsodipqufhjQSDOIFHqdsoifh POSIQDUHFsdfk QPIDFYHoi 
            fhjSODIFHsolkdfhOISUDFYH qsdlijfhqdsopifhqsdolifhqsdofujhqsdfkjhqsdpkfjqhsdkpfjqhsdf 
            jkqsdhf lkjqsdhf jdsfij hqskfuhSKMJFHDs jhSDFMO JHsqmf jhOSUDFH Msdf hjfqsdlmkfhqsdkljfhqsdkpolhfjkhqsdhfm qskdjfhb qklmsdjhnf mkjqsdhf mkljqsdhflkflkjqsdf
            qskdjfhqsdlmkfjlksdhjflqksdjflmqsdkjflqùksdj flkqsdjf lqksdjf lkqjsdflkj qsdf
             qsdlfjhqsdlkfhjqsdlkjfjqsdlkfjqsdlkfjqlsùdkjfqlskdmjfqlsdkjflkqsdjf"
                />
                <Roll
                    className="img-bottom-left"
                    img={imgCRPCR}
                    titletop="CRPCR"
                    content="qodsfyuhqsdmkloifjSODÏFJsodipqufhjQSDOIFHqdsoifh POSIQDUHFsdfk QPIDFYHoi 
            fhjSODIFHsolkdfhOISUDFYH qsdlijfhqdsopifhqsdolifhqsdofujhqsdfkjhqsdpkfjqhsdkpfjqhsdf 
            jkqsdhf lkjqsdhf jdsfij hqskfuhSKMJFHDs jhSDFMO JHsqmf jhOSUDFH Msdf hjfqsdlmkfhqsdkljfhqsdkpolhfjkhqsdhfm qskdjfhb qklmsdjhnf mkjqsdhf mkljqsdhflkflkjqsdf
            qskdjfhqsdlmkfjlksdhjflqksdjflmqsdkjflqùksdj flkqsdjf lqksdjf lkqjsdflkj qsdf
             qsdlfjhqsdlkfhjqsdlkjfjqsdlkfjqsdlkfjqlsùdkjfqlskdmjfqlsdkjflkqsdjf"
                />
                <Roll
                    className="img-top-right"
                    img={imgAPERCORA}
                    titlebottom="APERCORA"
                    content="CRPCR est partenaire de la société APERCORA organisme certifié et reconnu dans le domaine de la formation en Radioprotection. 

                    Les formations PCR sources non-scellées sont réalisées au sein des locaux de l'unité INSERM Cycéron de Caen, permettant d'avoir a disposition des salles spécifiques. 
                    
                    J'interviens en partenariat de Marie-Lène GAAB CRP de Cycéron. "
                />
                <Roll
                    className="img-top-left"
                    img={imgYannick}
                    titlebottom="Mme ..."
                    content="La partenariat s'étend avec un groupe de formateurs compétents tel que : 

                    - Marc AMMERICH 
                    
                    - Sandrine BONNAIRE 
                    
                    - Christophe TOURNEUX
                    
                    - Christophe LEGRAND
                    
                    - Marie-Lène GAAB
                    
                    Si vous souhaitez des formations de qualité en adéquation avec le terrain, 
                    n'hésitez pas à nous contacter. Nous proposons une offre de formation sur une grande 
                    partie du territoire "
                />
            </div>
        </div>
    );
};

export default Corp;
