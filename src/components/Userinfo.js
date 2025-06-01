export default class Userinfo {
    constructor({profileTitle ,profileDescription,profileImage}) {
        this._profiletitle = profileTitle;
        this._profiledescription = profileDescription;
        this._avatar = profileImage;
    };

    getUserInfo(){
        return{
            name: this._profiletitle.textContent,
            job: this._profiledescription.textContent,
            avatar: this._avatar.textContent
        };
    }

    setUserInfo({title, description}){
        this._profiletitle.textContent = title,
        this._profiledescription.textContent = description;
    };

    setAvatar(newImage) {
        this._avatar.src = newImage;
    }


}