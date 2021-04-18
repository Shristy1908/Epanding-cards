const allpanels=document.querySelectorAll('.pannel')
allpanels.forEach((pannel) =>{
    pannel.addEventListener('click', () =>{
        removeActiveclasses()
        pannel.classList.add('active')
    })
})

function removeActiveclasses(){
    allpanels.forEach((pannel) =>{
        pannel.classList.remove('active')
    })
}