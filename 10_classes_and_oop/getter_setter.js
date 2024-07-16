class User  {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}jayant`
    }
    set password(value){
        this._password = value
    }
}

const jayant = new User("jayant@gmail.com","abc")
console.log(jayant.password);