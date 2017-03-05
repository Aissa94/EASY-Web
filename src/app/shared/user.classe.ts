export class User {
    nom : string='';
    email : string='';
    photoURL : string='';
    role : number=1;

    constructor (nom?: string, email?: string, photoURL?: string, role?: number){
        this.nom = nom;
        this.email = email;
        this.photoURL = photoURL;
        this.role = role;
    }
}