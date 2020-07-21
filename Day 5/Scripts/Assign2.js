class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.course=[];
    }
    static(){
        console.log("Welcome ❤");
    }
    Login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}
class Moderator extends User{
    // constructor(name,age,email){
    //     super(name,age,email);
    // }
    addCoins(user){
        user.coins+=1;
        return this;
    }
    removeCoins(user){
        user.coins-=1;
        return this;
    }
}
class Admin extends Moderator{
    // constructor(name,age,email){
    //     // super(name,age,email);
    // }
    addCourse(user, course){
        user.course.push(course);
        return this;
    }
    removeCourse(user, course){
        user.course=user.course.filter(element => {
            if (element!=course) {
                return element;
            }
        });
    }
}
user1= new User('archie',25,'arch@riverdale.com');
user2= new User('veronica',24,'vero@riverdale.com');
mod1= new Moderator('jughead',24,'jughead@riverdale.com');
admin=new Admin('betty',25,'bet@riverdale.com');
// console.log(user1);
admin.addCourse(user1, 'JavaScript').addCourse(user1, 'AI/ML').addCourse(user1, 'Python');
mod1.addCoins(user1).addCoins(user1).addCoins(user1);
admin.removeCoins(user1);
admin.removeCourse(user1,'Python');
console.log(user1);


