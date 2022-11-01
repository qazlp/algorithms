let array = [12,13,34,56,465,2024,3023];

let item = 13;
let low = 0; 
let high = array.length - 1;

while(low <= high){
   let middle = Math.floor((low + high) / 2);
   let guess = array[middle];
   if(guess === item){
        console.log(middle);
        return middle;
   }
   if(guess > item){
    high = middle - 1
   }
   else{
    low = middle + 1
   }
}