export default class Userinfo {
    constructor(profiletitle ,profiledescription) {
        this._profiletitle = profiletitle;
        this._profiledescription = profiledescription;
    };

    getUserInfo(){
        return{
            name: this._profiletitle.textContent,
            job: this._profiledescription.textContent,
        };
    }

    setUserInfo(name, job){
        this._profiletitle.textContent = name
        this._profiledescription.textContent = job
    }


}