// const button = document.getElementById('btnButton');
        
//         const firstName = document.getElementById('firstName');     // ini untuk mengambil firstName
//         const lastName = document.getElementById('lastName');     
//         const city = document.getElementById('city');     
//         const zipCode = document.getElementById('zipCode');     
//         const check = document.getElementById('check');     
        // button.addEventListener('click',function () {
        // console.log(getFormData())
        // })


        // function getFormData() {
        //     var ambilNama = {
        //         firstName : firstName.value,
        //         lastName : lastName.value,
        //         city : city.value,
        //         zipCode : zipCode.value,
        //         check : check.value,
        //     }
        //     return ambilNama;
        // }

        let angka = "s";
        
        let isNumber = (string) => {
            if(typeof string == "number"){
                return true;    
            }else{
                return false;
            }
        }
        console.log( "tipe data dari variable angka adalah "+
                        typeof angka+
                         " jadi nilai dari angka adalah "+
                        isNumber(angka))




























