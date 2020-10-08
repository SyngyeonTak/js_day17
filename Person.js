class Person{
    constructor(eye, arm){
        
        this.eye = eye;
        this.arm = arm;
        console.log("my eyes: %d, arms %d", this.eye, this.arm);
    }

    walk(){
        console.log("두발로 걸어요");
    }
    
    speak(){
        console.log("말을 해요");
    }
}