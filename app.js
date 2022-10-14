const name=document.querySelector('#name')
const surname=document.querySelector('#surname')
const password=document.querySelector('#password')
const age=document.querySelector('#age')
const male=document.querySelector('#male')
const female=document.querySelector('#female')
const langues=document.querySelectorAll('input[type=checkbox]')
const city=document.querySelector('#city')
const favorites=document.querySelector('#favorites')
const submitBtn=document.querySelector('#submitBtn')

const fillFormClass=(e)=>{
    e.preventDefault()
    const frmName=name.value
    const frmSurname=surname.value
    const frmPassword=password.value
    const frmAge=age.value
    const frmMale=male.checked
    const frmFemale=female.checked
    const gender=()=>{
        if (frmMale) {
            return "male"
        }
        if (frmFemale) {
            return "female"
        }
    }
    const frmLanguages=[]
    langues.forEach(item=>{
        if (item.checked) {
            frmLanguages.push(item.value)   
        }
    })
    const fmrCity=city.value
    const frmFavorites=[]
    for (let i = 0; i < favorites.options.length; i++) {
        if (favorites.options[i].selected) {
            frmFavorites.push(favorites.options[i].value) 
        }
    }
    const myclass=new MyClass(
        frmName,
        frmSurname,
        frmPassword,
        frmAge,
        gender(),
        frmLanguages,
        fmrCity,
        frmFavorites
    )
    console.log(myclass)
    localStorage.setItem(myclass.registerID,JSON.stringify(myclass))
}

submitBtn.addEventListener('click',fillFormClass)