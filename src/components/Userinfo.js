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

    setUserInfo(title, description){
        this._profiletitle.textContent = title,
        this._profiledescription.textContent = description
    };


}