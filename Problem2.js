let [x1,y1] = [1,1] //Queen 1
let [x2,y2] = [3,3] //Queen 2 

function canAttack(x1,y1,x2,y2){
    //case 1 : if x-coordinate of both the queen's is same
    if(x1==x2){
        return true
    }
    //case 2 : if y-coordinate of both the queen's is same
    if(y1==y2){
        return true
    }
    //case 3: If the other queen is along it's diagonal
    else if(Math.abs(x1-x2)==Math.abs(y1-y2)){
        return true
    }
    return false
}

console.log(canAttack(x1,y1,x2,y2))