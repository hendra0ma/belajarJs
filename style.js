




        // const button = document.getElementById('btnButton');
        const firstName = document.getElementById('first-name');     // ini untuk mengambil firstName
        const lastName = document.getElementById('last-name');     
        const city = document.getElementById('city');     
        const zipCode = document.getElementById('zip-code');     
        const check = document.getElementById('check');     
        const warning = document.getElementById('warning');


        let resetForm = () => {
            firstName.value = '';
            lastName.value = '';
            city.value = '';
            zipCode.value = '';
            check.checked = false;
        }

        let validateFormData = (e = getFormData()) =>{
            
                if (firstName.value != '' && lastName.value != '' && city.value != '') {
                    if (typeof zipCode.value != "number") {
                        if (isLength(zipCode.value , 5) == true) {
                            if (checkBoxIsChecked() === true) {
                                warning.innerHTML = '';
                                return true;                                
                            }    else{
                                warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
                                return false;
                            }
                        }else{
                            warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
                            return false;
                        }
                        
                    }else{
                        warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
                        return false;
                    }
                }else{
                    warning.innerHTML = '<font color="#FF00000"> periksa form anda sekali lagi </font>';
                    return false;
                }

        }

        function getFormData() {
            var ambilNama = {
                firstName : firstName.value,
                lastName : lastName.value,
                city : city.value,
                zipCode : zipCode.value,
                check : check.checked,
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

        














