




        const button = document.getElementById('btnButton');
        const firstName = document.getElementById('first-name');     // ini untuk mengambil firstName
        const lastName = document.getElementById('lastName');     
        const city = document.getElementById('city');     
        const zipCode = document.getElementById('zipCode');     
        const check = document.getElementById('check');     
        button.addEventListener('click',function () {
            validateFormData()
            if (validateFormData() == true) {
                console.log('berhasil')
                return true;
            }else{
                return false;
            }
        })


        let validateFormData = () =>{
                if (getFormData().firstName != '' && getFormData().lastName != ''&& getFormData().city != '') {
                    if (typeof getFormData().zipCode != "number") {
                        if (isLength(getFormData().zipCode , 5) == true) {
                            if (checkBoxIsChecked() === true) {
                                return true;
                            }    else{
                                return false;
                            }
                        }else{
                            return false;
                        }
                        
                    }else{
                    return false;
                    }
                }else{
                    return false;
                }

        }

        function getFormData() {
            var ambilNama = {
                firstName : firstName.value,
                lastName : lastName.value,
                city : city.value,
                zipCode : zipCode.value,
                check : check.value,
            }
            return ambilNama;
        }
        let angka = "sayaHendra";
        
        let isNumber = (string) => {
            if(typeof string == "number"){
                return true;    
            }else{
                return false;
            }
        }


        let isLength = (string, integer) => {
            if (typeof integer == "number") {
                if(string.length == integer){
                    return true;
                }else{
                    return false;
                }    
            }else{
                console.log("gagal");
            }
        }


        let checkBoxIsChecked = ()=>{
            if (check.checked) {
                return true
            }else{
                return false  
            }

        }

        














