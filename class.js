class MyClass{
    constructor(name,surname,password,age,gender,langues,city,favorites){
        this.name=name
        this.surname=surname
        this.password=password
        this.age=age
        this.gender=gender
        this.langues=langues
        this.city=city
        this.favorites=favorites
        this.registerTime=new Date().toLocaleString()
        this.registerID=new Date().getTime()
    }
}