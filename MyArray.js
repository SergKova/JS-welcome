function MyArray(){
    this.length = 0;
    this.arguments = function(){

    }


function MyProtoArray(){
    this.push = function(item) {
        this[this.item] = item;
        return ++this.length;
    }

    this.pop = function(){
        if(this.length === 0){
        return
    }

    const delItem = this[this.length - 1];
    delete this[--this.length];
    
    return delItem;
    }


} 
}
MyArray.prototype = new MyProtoArray(); // связь с прототипом

 
