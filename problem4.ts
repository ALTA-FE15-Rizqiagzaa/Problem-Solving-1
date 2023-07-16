function lotre(){
    return new Promise((reslove, reject) =>{
        console.log("-----UNDIAN LOTRE DIMULAI-----")
        console.log("sedang mengambil nomor")
        let number = Math.floor(Math.random() * 1000)
        console.log("Undian yang didapatkan adalah", number)
        setTimeout(() => {
            if (number >= 1000){
                reslove("selamat anda memenangkannya")
            } else {
                reject("maaf anda gagal")
            }
        }, 10000);
    })
}
async function playDraw(){
    await lotre()
     .then((response) => {
         console.log(response)
     })
     .catch((error) => {
         console.log(error)
     })
     .finally(() => {
         console.log("---- UNDIAN SUDAH SELESAI ----")
     })
 }
 
 function result(){
     console.log("cek hasil promise : ")
     playDraw()
     console.log("oke")
 }
 
 result()