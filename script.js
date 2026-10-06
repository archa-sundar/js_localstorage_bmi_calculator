const getData= ()=> {
    try {
    let data =localStorage.getItem('data')
    data= JSON.parse(data)
    if(data){
        document.getElementsByTagName('h1')[0].innerText= data.heightinputVal
    document.getElementsByTagName('h2')[0].innerText= data.weightInputVal
    }
else{
 document.getElementsByTagName('h1')[0].innerText= "no input"
    document.getElementsByTagName('h2')[0].innerText= "no input"
}
}catch(error){
    console.log(error)
}
}
getData()

const onAddBtnClick =()=>{
    try {
          let heightinputVal = document.getElementById('heightinput').value
    let weightInputVal = document.getElementById('weightinput').value
   let  obj ={heightinputVal, weightInputVal}
   console.log(obj)

   let jsonObj =JSON.stringify(obj)
   console.log(jsonObj)

localStorage.setItem("data",jsonObj)
alert("Successfully saved")
document.getElementById('heightinput').value=""
document.getElementById('weightinput').value=""
getData()
}catch(error){
    console.log(error)
    alert("error occured whilel saving")
}
}
const onDeleteClick =()=>{
    try{
        localStorage.removeItem('data')
        alert('Successfully deleted')
        getData()
    }catch(error){
        console.log(error)
        alert("deletion failed")
    }
}
const editBtnClick =() =>{
    let data = localStorage.getItem('data')
    data=JSON.parse(data)

    document.getElementById('heightinput').value= data.heightinputVal
    document.getElementById('weightinput').value= data.weightInputVal

    document.getElementById('addBtn').innerText="Edit"
    document.getElementById('addBtn').className= "btn btn-warning"
    onDeleteClick()
}