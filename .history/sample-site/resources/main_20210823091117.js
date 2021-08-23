let person = {
    name : ['Bob', 'Smith'],
    age  : 32,
    gender : 'male',
    interests : ['music', 'skiing'],
    bio : function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    }
}