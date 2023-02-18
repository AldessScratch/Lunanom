checkusername()

function checkusername(){
    if (localStorage.getItem('nickname')==="AldessSc"){
        viplogin()
    }else{
        if (localStorage.getItem('nickname')==="Pix4rt"){
            viplogin()
        }else{ 
            if (localStorage.getItem('nickname')==="X-crash-X"){
                viplogin()
            }else{
                if (localStorage.getItem('nickname')==="Foxyz"){
                    viplogin()
                }else{
                    if (localStorage.getItem('nickname')==="Arrox78"){
                        viplogin()
                    }else{
                        if (localStorage.getItem('nickname')==="Nul0923"){
                            viplogin()
                        }else{
                            if (localStorage.getItem('nickname')==="SuperCool"){
                                viplogin()
                            }else{
                                if (localStorage.getItem('nickname')==="Henri"){
                                    viplogin()
                                }else{
                                    window.location.href = "./index.html"
                                }
                            }
                        }
                    }
                }
            }
        }

    }
}

function viplogin(){    
            if (localStorage.getItem('mdpvip')==='1'){
                 window.location.href = "./zonevip.html"
            }else{
                let result = prompt("Veuillez entrer votre mot de passe")
            if (result === "getsc23"){
                window.location.href = "./zonevip.html"
                localStorage.setItem('mdpvip', '1')
            }else {
                window.location.href = "./index.html"

            }
        }
}