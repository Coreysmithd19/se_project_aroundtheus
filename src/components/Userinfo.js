export default class Userinfo {
    constructor({profiletitle ,profiledescription,profileImage}) {
        this._profiletitle = profiletitle;
        this._profiledescription = profiledescription;
        this._avatar = profileImage;
    };

    getUserInfo(){
        return{
            name: this._profiletitle.textContent,
            job: this._profiledescription.textContent,
            avatar: this._avatar.textContent
        };
    }

    setUserInfo({title, description, avatar}){
        this._profiletitle.textContent = title,
        this._profiledescription.textContent = description,
        this._avatar.src = avatar;
    };

    setAvatar(newImage) {
        this._avatar.src = newImage;
    }


}