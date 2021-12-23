// let list=[];
// let temp=0;
// do{
//     let input = prompt("WHAT WOULD YOU LIKE TO DO! (enter quit to exit)");
//     if(input === 'new'){
//         let task = prompt("ENTER NEW TASK : ");
//         list.push(task);
//         console.log(` "${task}" added to list `);
//     }
//     else if(input === 'delete'){
//         do{
//             let delTask = prompt("ENTER TASK TO BE DELETED: ");
//             for(let i=0; i< list.length; i++){
//                 if(delTask === list[i]){
//                     temp++;
//                     break;
//                 }
//             }
//             if(temp!==0){
//                 list.splice(i,1);
//                 console.log(`${delTask} deleted from list `);
//             }
//         }while(temp===0);
//     }    
//     else if(input === 'list'){
//         console.log('_____*****_____');
//         for(let j=0; j<list["length"]; j++){
//             console.log(` ${j+1} . ${list[j]}`);
//         }
//         console.log('_____*****_____');
//     }
//     else{
//         console.log("Invalid Input");
//     }
// }while(input !== 'quit');