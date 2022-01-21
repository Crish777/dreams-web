import data from '../data.js'
const productScreen = {
    render: ()=>{
        return `
           <section class="heroSection section">

                <h3 class="uppercase heroTitle title">Nuestro último proyecto</h3>

                <div class="computerProject bg-ct" style="background-image: url(../img/${data.projects[page].resumeImg})"></div>

           </section>

           <section class="descriptionSection section">
                <div class="contDescription">

                    <div class="projectName uppercase title">${data.projects[page].projectName}</div>
                    <p class="projectDescription">${data.projects[page].projectDescription}</p>
                
                </div>
                
           </section>

           <section class="section interfacePhone">

                <div class="contDescription">

                    <div class="titleSec uppercase title titleInterfacePhone">Interfaz móvil</div>
                
                </div>

                <div class="multimediaCont phoneImg">

                    <div class="imgPhoneInterface">

                        <div class="bg-ct phoneWeb loadPhone" style="background-image: url(${data.projects[page].phoneInterface[0]})"></div>
                        <div class="bg-ct phoneWeb homePhone" style="background-image: url(${data.projects[page].phoneInterface[1]})"></div>
                        <div class="bg-ct phoneWeb detailPhone" style="background-image: url(${data.projects[page].phoneInterface[2]})"></div>
                    
                    </div>

                    ${data.projects[page].videoPhone !== undefined && data.projects[page].videoPhone !== "" ? `<div class="videoInterfacePhone"></diV`: ``}

                
                </div>

           </section>

           <section class="section interfacePhone">

                <div class="contDescription">

                    <div class="titleSec uppercase title titleInterfacePhone">Interfaz web</div>
                
                </div>

                <div class="multimediaCont webImg">

                    <div class="imgPhoneInterface imgWebInterface">

                        <div class="bg-ct phoneWeb web" style="background-image: url(${data.projects[page].webPrototype})"></div>                        
                    
                    </div>

                    ${data.projects[page].webVideoPrototype !== undefined && data.projects[page].webVideoPrototype !== "" 
                        ? 
                        `<div class="videoInterfaceWeb">

                            <video id="videoWeb" autoplay muted loop playsinline>

                                <source src="${data.projects[page].webVideoPrototype}">
                            
                            </video>

                         </diV`
                    : ``}


                
                </div>

           </section>

           <section class="section designAndDev">

                <div class="contDescription">

                    <div class="titleSec uppercase title titleInterfacePhone">Diseño y desarrollo web</div>
                
                </div>

                <div class="multimediaCont webImg">

                    <div class="imgScreenShot">

                        <img class="bg-ct screenShotWeb" src="${data.projects[page].designAndDev}">                      
                    
                    </div>
                
                </div>



           </section>
        
        `
    }
}


export default productScreen;