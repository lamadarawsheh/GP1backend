// const express= require('express');
// const { default: mongoose } = require('mongoose');
// const emp = require('../models/employee');
// const build = require('../models/building');
// const suntabel = require('../models/suntabel');
// const montabel = require('../models/montabel');
// const tuetabel = require('../models/tuetabel');
// const wedtabel = require('../models/wedtabel');
// const thurtabel = require('../models/thurtabel');
// const router = express.Router();

// const { request } = require('express');


// const employee = mongoose.model("empinfo");
// const building = mongoose.model("buildinginfo");
// const sunday = mongoose.model("suntabel");
// const monday = mongoose.model("montabel");
// const tuesday = mongoose.model("tuetabel");
// const wednesday = mongoose.model("wedtabel");
// const thursday = mongoose.model("thurtabel");

// const cron = require('node-cron');
// //const arr = ['A','D', 'A', 'F','B','A','C','E','B'];

// //const b=['A','B','C','D','E','F'];
// const n=[3,1,2,2,2,1,1];
// //  shift1Data = [];
// //  shift2Data = [];
// //  shift3Data = [];
// //  shift4Data = [];

// // 10  SHOULD BE CHANGED is the number of employees from the tables we willl get it 
// // i assumed number of building is less than the workers so its in total 9 buildings and 10 workers 
// //the limit for z is the size of the array containing the buildings 

// //we will get numof emp from data base empinfo table 

// // we will fill building names and level of security from data base also buildings table 
// // we need this code to fill all  5 days tables every week 
// // then send it to the front end in order to show it on the calender 
 


// // for (let m=0;m<sum;m++)
// //       {
// //         console.log(arr[m]);

// //       }



             
// console.log('Before job instantiation');



// cron.schedule('* * * * *',  async function() { 
//     const arr=[];
//     shift1Data = [];
//     shift2Data = [];
//     shift3Data = [];
//     shift4Data = [];
//   console.log('running a task every 21 day in the month');
//   const b = await building.distinct('id');
//   let sum=0;
//   for (let i=0;i<n.length;i++)
//    {
//       sum=sum+n[i];
//    }
//    //console.log(sum);
  
//   for (let i=0;i<n.length;i++)
//   {
//       for (let j=0;j<n[i];j++)
//       {
//           arr.push(b[i]);
          
//       }
      
//   }
  
//   // for (let m=0;m<sum;m++)
//   //       {
//   //         console.log(arr[m]);
  
//   //       }
//   //      console.log("//////////");
//   let currentIndex = arr.length,  randomIndex;
  
//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {
  
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
  
//     // And swap it with the current element.
//     [arr[currentIndex], arr[randomIndex]] = [
//       arr[randomIndex], arr[currentIndex]];
//   }
//    for (let i=0;i<5;i++)
//  {
  
  
// const empid=await employee.distinct("id");
//   const numofemp = await employee.countDocuments();
//   const lowsbuildings =await building.find({ levelofsec: 1 });
//   const numoflsemp = await building.countDocuments({levelofsec: 1});
//   console.log(`number of employees : ${numofemp}`);
//   console.log(`number of emp : ${numoflsemp}`);
//   for (let m=0;m<sum;m++)
//         {
//           console.log(arr[m]);
  
//         }
//        console.log("//////////");


// if (i==0)
// {
//   //fill sunday table 
//   console.log("sund/////////");
//   let  z=Math.floor(Math.random() * (11));
//   console.log(arr.length);
//   for (let i=0; i < arr.length; i++) {
//       //console.log(array[i])
//       shift1Data.push(arr[z]);
      
//       if(z==(sum-1)){
          
//           z=-1;
//       }
      
//       z++;
//     }

//     let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
//     console.log("z0"+z0);
//     console.log(numofemp-sum);
//     console.log("start");
//     for (let i=0; i < (numofemp-sum); i++) {
//         //console.log(array[i])
//         shift1Data.push(lowsbuildings[z0].id);
//         // console.log(lowsbuildings.id[z0]);
        
//         console.log(lowsbuildings[z0].id);
//         if(z0==((numoflsemp)-1)){
            
//             z0=-1;
//         }
        
//         z0++;
//       }



//     let  m=Math.floor(Math.random() * (11));
//     for (let i=0; i < arr.length; i++) {
//         //console.log(array[i])
//         shift2Data.push(arr[m]);
      
//         if(m==(sum-1)){
            
//             m=-1;
//         }
        
//         m++;
//       }


//       let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
//       console.log("m0"+m0);
//       console.log(numofemp-sum);
//       console.log("start");
//       for (let i=0; i < (numofemp-sum); i++) {
//           //console.log(array[i])
//           shift2Data.push(lowsbuildings[m0].id);
//           // console.log(lowsbuildings.id[z0]);
          
//           console.log(lowsbuildings[m0].id);
//           if(m0==((numoflsemp)-1)){
              
//               m0=-1;
//           }
          
//           m0++;
//         }





//       let  g=Math.floor(Math.random() * (11));
//       for (let i=0; i < arr.length; i++) {
//           //console.log(array[i])
//           shift3Data.push(arr[g]);
        
//           if(g==(sum-1)){
              
//               g=-1;
//           }
          
//           g++;
//         }


//         let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
//         console.log("g0"+g0);
//         console.log(numofemp-sum);
//         console.log("start");
//         for (let i=0; i < (numofemp-sum); i++) {
//             //console.log(array[i])
//             shift3Data.push(lowsbuildings[g0].id);
//             // console.log(lowsbuildings.id[z0]);
            
//             console.log(lowsbuildings[g0].id);
//             if(g0==((numoflsemp)-1)){
                
//                 g0=-1;
//             }
            
//             g0++;
//           }



//         let  l=Math.floor(Math.random() * (11));
//         for (let i=0; i < arr.length; i++) {
//             //console.log(array[i])
//             shift4Data.push(arr[l]);
          
//             if(l==(sum-1)){
                
//                 l=-1;
//             }
            
//             l++;
//           }


//           let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
//           console.log("l0"+l0);
//           console.log(numofemp-sum);
//           console.log("start");
//           for (let i=0; i < (numofemp-sum); i++) {
//               //console.log(array[i])
//               shift4Data.push(lowsbuildings[l0].id);
//               // console.log(lowsbuildings.id[z0]);
              
//               console.log(lowsbuildings[l0].id);
//               if(l0==((numoflsemp)-1)){
                  
//                   l0=-1;
//               }
              
//               l0++;
//             }







//     //       console.log('///////////////'); 

//     // for (let m=0;m<numofemp;m++)
//     // {
//     //   console.log(shift1Data[m]);

//     // }

//     //         console.log('///////////////'); 

//     //         for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift2Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //        for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift3Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //       for (let m=0;m<numofemp;m++)
//     //       {
//     //         console.log(shift4Data[m]);
    
//     //       }
//     //        console.log('///////////////'); 

// for (let i=0;i<numofemp;i++)
// {


//       await sunday.create({
//         shift1:shift1Data[i],
//         shift2:shift2Data[i],
//         shift3:shift3Data[i],
//         shift4:shift4Data[i],
//         thiswavailable:"true",
//         nextwavailable:"true",
//         idnum:empid[i]
//     });

// }
// // arr=[];
// shift1Data = [];
// shift2Data = [];
// shift3Data = [];
// shift4Data = [];

// }
// else if (i==1)
// {
//    //fill monday table 
//    console.log("mond/////////");
//    let  z=Math.floor(Math.random() * (11));
//   console.log(arr.length);
//   for (let i=0; i < arr.length; i++) {
//       //console.log(array[i])
//       shift1Data.push(arr[z]);
      
//       if(z==(sum-1)){
          
//           z=-1;
//       }
      
//       z++;
//     }

//     let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
//     console.log("z0"+z0);
//     console.log(numofemp-sum);
//     console.log("start");
//     for (let i=0; i < (numofemp-sum); i++) {
//         //console.log(array[i])
//         shift1Data.push(lowsbuildings[z0].id);
//         // console.log(lowsbuildings.id[z0]);
        
//         console.log(lowsbuildings[z0].id);
//         if(z0==((numoflsemp)-1)){
            
//             z0=-1;
//         }
        
//         z0++;
//       }



//     let  m=Math.floor(Math.random() * (11));
//     for (let i=0; i < arr.length; i++) {
//         //console.log(array[i])
//         shift2Data.push(arr[m]);
      
//         if(m==(sum-1)){
            
//             m=-1;
//         }
        
//         m++;
//       }


//       let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
//       console.log("m0"+m0);
//       console.log(numofemp-sum);
//       console.log("start");
//       for (let i=0; i < (numofemp-sum); i++) {
//           //console.log(array[i])
//           shift2Data.push(lowsbuildings[m0].id);
//           // console.log(lowsbuildings.id[z0]);
          
//           console.log(lowsbuildings[m0].id);
//           if(m0==((numoflsemp)-1)){
              
//               m0=-1;
//           }
          
//           m0++;
//         }





//       let  g=Math.floor(Math.random() * (11));
//       for (let i=0; i < arr.length; i++) {
//           //console.log(array[i])
//           shift3Data.push(arr[g]);
        
//           if(g==(sum-1)){
              
//               g=-1;
//           }
          
//           g++;
//         }


//         let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
//         console.log("g0"+g0);
//         console.log(numofemp-sum);
//         console.log("start");
//         for (let i=0; i < (numofemp-sum); i++) {
//             //console.log(array[i])
//             shift3Data.push(lowsbuildings[g0].id);
//             // console.log(lowsbuildings.id[z0]);
            
//             console.log(lowsbuildings[g0].id);
//             if(g0==((numoflsemp)-1)){
                
//                 g0=-1;
//             }
            
//             g0++;
//           }



//         let  l=Math.floor(Math.random() * (11));
//         for (let i=0; i < arr.length; i++) {
//             //console.log(array[i])
//             shift4Data.push(arr[l]);
          
//             if(l==(sum-1)){
                
//                 l=-1;
//             }
            
//             l++;
//           }


//           let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
//           console.log("l0"+l0);
//           console.log(numofemp-sum);
//           console.log("start");
//           for (let i=0; i < (numofemp-sum); i++) {
//               //console.log(array[i])
//               shift4Data.push(lowsbuildings[l0].id);
//               // console.log(lowsbuildings.id[z0]);
              
//               console.log(lowsbuildings[l0].id);
//               if(l0==((numoflsemp)-1)){
                  
//                   l0=-1;
//               }
              
//               l0++;
//             }







//     //       console.log('///////////////'); 

//     // for (let m=0;m<numofemp;m++)
//     // {
//     //   console.log(shift1Data[m]);

//     // }

//     //         console.log('///////////////'); 

//     //         for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift2Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //        for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift3Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //       for (let m=0;m<numofemp;m++)
//     //       {
//     //         console.log(shift4Data[m]);
    
//     //       }
//     //        console.log('///////////////'); 

// for (let i=0;i<numofemp;i++)
// {


//       await monday.create({
//         shift1:shift1Data[i],
//         shift2:shift2Data[i],
//         shift3:shift3Data[i],
//         shift4:shift4Data[i],
//         thiswavailable:"true",
//         nextwavailable:"true",
//         idnum:empid[i]
//     });

// }
// // arr=[];
// shift1Data = [];
// shift2Data = [];
// shift3Data = [];
// shift4Data = [];

// }
// else if (i==2)
// {
//  //fill tuesday table 
//  console.log("tues/////////");
//  let  z=Math.floor(Math.random() * (11));
//   console.log(arr.length);
//   for (let i=0; i < arr.length; i++) {
//       //console.log(array[i])
//       shift1Data.push(arr[z]);
      
//       if(z==(sum-1)){
          
//           z=-1;
//       }
      
//       z++;
//     }

//     let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
//     console.log("z0"+z0);
//     console.log(numofemp-sum);
//     console.log("start");
//     for (let i=0; i < (numofemp-sum); i++) {
//         //console.log(array[i])
//         shift1Data.push(lowsbuildings[z0].id);
//         // console.log(lowsbuildings.id[z0]);
        
//         console.log(lowsbuildings[z0].id);
//         if(z0==((numoflsemp)-1)){
            
//             z0=-1;
//         }
        
//         z0++;
//       }



//     let  m=Math.floor(Math.random() * (11));
//     for (let i=0; i < arr.length; i++) {
//         //console.log(array[i])
//         shift2Data.push(arr[m]);
      
//         if(m==(sum-1)){
            
//             m=-1;
//         }
        
//         m++;
//       }


//       let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
//       console.log("m0"+m0);
//       console.log(numofemp-sum);
//       console.log("start");
//       for (let i=0; i < (numofemp-sum); i++) {
//           //console.log(array[i])
//           shift2Data.push(lowsbuildings[m0].id);
//           // console.log(lowsbuildings.id[z0]);
          
//           console.log(lowsbuildings[m0].id);
//           if(m0==((numoflsemp)-1)){
              
//               m0=-1;
//           }
          
//           m0++;
//         }





//       let  g=Math.floor(Math.random() * (11));
//       for (let i=0; i < arr.length; i++) {
//           //console.log(array[i])
//           shift3Data.push(arr[g]);
        
//           if(g==(sum-1)){
              
//               g=-1;
//           }
          
//           g++;
//         }


//         let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
//         console.log("g0"+g0);
//         console.log(numofemp-sum);
//         console.log("start");
//         for (let i=0; i < (numofemp-sum); i++) {
//             //console.log(array[i])
//             shift3Data.push(lowsbuildings[g0].id);
//             // console.log(lowsbuildings.id[z0]);
            
//             console.log(lowsbuildings[g0].id);
//             if(g0==((numoflsemp)-1)){
                
//                 g0=-1;
//             }
            
//             g0++;
//           }



//         let  l=Math.floor(Math.random() * (11));
//         for (let i=0; i < arr.length; i++) {
//             //console.log(array[i])
//             shift4Data.push(arr[l]);
          
//             if(l==(sum-1)){
                
//                 l=-1;
//             }
            
//             l++;
//           }


//           let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
//           console.log("l0"+l0);
//           console.log(numofemp-sum);
//           console.log("start");
//           for (let i=0; i < (numofemp-sum); i++) {
//               //console.log(array[i])
//               shift4Data.push(lowsbuildings[l0].id);
//               // console.log(lowsbuildings.id[z0]);
              
//               console.log(lowsbuildings[l0].id);
//               if(l0==((numoflsemp)-1)){
                  
//                   l0=-1;
//               }
              
//               l0++;
//             }







//     //       console.log('///////////////'); 

//     // for (let m=0;m<numofemp;m++)
//     // {
//     //   console.log(shift1Data[m]);

//     // }

//     //         console.log('///////////////'); 

//     //         for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift2Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //        for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift3Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //       for (let m=0;m<numofemp;m++)
//     //       {
//     //         console.log(shift4Data[m]);
    
//     //       }
//     //        console.log('///////////////'); 

// for (let i=0;i<numofemp;i++)
// {


//       await tuesday.create({
//         shift1:shift1Data[i],
//         shift2:shift2Data[i],
//         shift3:shift3Data[i],
//         shift4:shift4Data[i],
//         thiswavailable:"true",
//         nextwavailable:"true",
//         idnum:empid[i]
//     });

// }
// // arr=[];
// shift1Data = [];
// shift2Data = [];
// shift3Data = [];
// shift4Data = [];
// }
// else if (i==3)
// {
// //fill wednesday table 
// console.log("wed/////////");
// let  z=Math.floor(Math.random() * (11));
//   console.log(arr.length);
//   for (let i=0; i < arr.length; i++) {
//       //console.log(array[i])
//       shift1Data.push(arr[z]);
      
//       if(z==(sum-1)){
          
//           z=-1;
//       }
      
//       z++;
//     }

//     let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
//     console.log("z0"+z0);
//     console.log(numofemp-sum);
//     console.log("start");
//     for (let i=0; i < (numofemp-sum); i++) {
//         //console.log(array[i])
//         shift1Data.push(lowsbuildings[z0].id);
//         // console.log(lowsbuildings.id[z0]);
        
//         console.log(lowsbuildings[z0].id);
//         if(z0==((numoflsemp)-1)){
            
//             z0=-1;
//         }
        
//         z0++;
//       }



//     let  m=Math.floor(Math.random() * (11));
//     for (let i=0; i < arr.length; i++) {
//         //console.log(array[i])
//         shift2Data.push(arr[m]);
      
//         if(m==(sum-1)){
            
//             m=-1;
//         }
        
//         m++;
//       }


//       let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
//       console.log("m0"+m0);
//       console.log(numofemp-sum);
//       console.log("start");
//       for (let i=0; i < (numofemp-sum); i++) {
//           //console.log(array[i])
//           shift2Data.push(lowsbuildings[m0].id);
//           // console.log(lowsbuildings.id[z0]);
          
//           console.log(lowsbuildings[m0].id);
//           if(m0==((numoflsemp)-1)){
              
//               m0=-1;
//           }
          
//           m0++;
//         }





//       let  g=Math.floor(Math.random() * (11));
//       for (let i=0; i < arr.length; i++) {
//           //console.log(array[i])
//           shift3Data.push(arr[g]);
        
//           if(g==(sum-1)){
              
//               g=-1;
//           }
          
//           g++;
//         }


//         let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
//         console.log("g0"+g0);
//         console.log(numofemp-sum);
//         console.log("start");
//         for (let i=0; i < (numofemp-sum); i++) {
//             //console.log(array[i])
//             shift3Data.push(lowsbuildings[g0].id);
//             // console.log(lowsbuildings.id[z0]);
            
//             console.log(lowsbuildings[g0].id);
//             if(g0==((numoflsemp)-1)){
                
//                 g0=-1;
//             }
            
//             g0++;
//           }



//         let  l=Math.floor(Math.random() * (11));
//         for (let i=0; i < arr.length; i++) {
//             //console.log(array[i])
//             shift4Data.push(arr[l]);
          
//             if(l==(sum-1)){
                
//                 l=-1;
//             }
            
//             l++;
//           }


//           let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
//           console.log("l0"+l0);
//           console.log(numofemp-sum);
//           console.log("start");
//           for (let i=0; i < (numofemp-sum); i++) {
//               //console.log(array[i])
//               shift4Data.push(lowsbuildings[l0].id);
//               // console.log(lowsbuildings.id[z0]);
              
//               console.log(lowsbuildings[l0].id);
//               if(l0==((numoflsemp)-1)){
                  
//                   l0=-1;
//               }
              
//               l0++;
//             }







//     //       console.log('///////////////'); 

//     // for (let m=0;m<numofemp;m++)
//     // {
//     //   console.log(shift1Data[m]);

//     // }

//     //         console.log('///////////////'); 

//     //         for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift2Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //        for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift3Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //       for (let m=0;m<numofemp;m++)
//     //       {
//     //         console.log(shift4Data[m]);
    
//     //       }
//     //        console.log('///////////////'); 

// for (let i=0;i<numofemp;i++)
// {


//       await wednesday.create({
//         shift1:shift1Data[i],
//         shift2:shift2Data[i],
//         shift3:shift3Data[i],
//         shift4:shift4Data[i],
//         thiswavailable:"true",
//         nextwavailable:"true",
//         idnum:empid[i]
//     });

// }
// // arr=[];
// shift1Data = [];
// shift2Data = [];
// shift3Data = [];
// shift4Data = [];

// }
// else if (i==4)
// {
// //fill thursday table 
// console.log("thur/////////");
// let  z=Math.floor(Math.random() * (11));
//   console.log(arr.length);
//   for (let i=0; i < arr.length; i++) {
//       //console.log(array[i])
//       shift1Data.push(arr[z]);
      
//       if(z==(sum-1)){
          
//           z=-1;
//       }
      
//       z++;
//     }

//     let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
//     console.log("z0"+z0);
//     console.log(numofemp-sum);
//     console.log("start");
//     for (let i=0; i < (numofemp-sum); i++) {
//         //console.log(array[i])
//         shift1Data.push(lowsbuildings[z0].id);
//         // console.log(lowsbuildings.id[z0]);
        
//         console.log(lowsbuildings[z0].id);
//         if(z0==((numoflsemp)-1)){
            
//             z0=-1;
//         }
        
//         z0++;
//       }



//     let  m=Math.floor(Math.random() * (11));
//     for (let i=0; i < arr.length; i++) {
//         //console.log(array[i])
//         shift2Data.push(arr[m]);
      
//         if(m==(sum-1)){
            
//             m=-1;
//         }
        
//         m++;
//       }


//       let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
//       console.log("m0"+m0);
//       console.log(numofemp-sum);
//       console.log("start");
//       for (let i=0; i < (numofemp-sum); i++) {
//           //console.log(array[i])
//           shift2Data.push(lowsbuildings[m0].id);
//           // console.log(lowsbuildings.id[z0]);
          
//           console.log(lowsbuildings[m0].id);
//           if(m0==((numoflsemp)-1)){
              
//               m0=-1;
//           }
          
//           m0++;
//         }





//       let  g=Math.floor(Math.random() * (11));
//       for (let i=0; i < arr.length; i++) {
//           //console.log(array[i])
//           shift3Data.push(arr[g]);
        
//           if(g==(sum-1)){
              
//               g=-1;
//           }
          
//           g++;
//         }


//         let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
//         console.log("g0"+g0);
//         console.log(numofemp-sum);
//         console.log("start");
//         for (let i=0; i < (numofemp-sum); i++) {
//             //console.log(array[i])
//             shift3Data.push(lowsbuildings[g0].id);
//             // console.log(lowsbuildings.id[z0]);
            
//             console.log(lowsbuildings[g0].id);
//             if(g0==((numoflsemp)-1)){
                
//                 g0=-1;
//             }
            
//             g0++;
//           }



//         let  l=Math.floor(Math.random() * (11));
//         for (let i=0; i < arr.length; i++) {
//             //console.log(array[i])
//             shift4Data.push(arr[l]);
          
//             if(l==(sum-1)){
                
//                 l=-1;
//             }
            
//             l++;
//           }


//           let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
//           console.log("l0"+l0);
//           console.log(numofemp-sum);
//           console.log("start");
//           for (let i=0; i < (numofemp-sum); i++) {
//               //console.log(array[i])
//               shift4Data.push(lowsbuildings[l0].id);
//               // console.log(lowsbuildings.id[z0]);
              
//               console.log(lowsbuildings[l0].id);
//               if(l0==((numoflsemp)-1)){
                  
//                   l0=-1;
//               }
              
//               l0++;
//             }







//     //       console.log('///////////////'); 

//     // for (let m=0;m<numofemp;m++)
//     // {
//     //   console.log(shift1Data[m]);

//     // }

//     //         console.log('///////////////'); 

//     //         for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift2Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //        for (let m=0;m<numofemp;m++)
//     //         {
//     //           console.log(shift3Data[m]);
      
//     //         }
//     //        console.log('///////////////'); 

//     //       for (let m=0;m<numofemp;m++)
//     //       {
//     //         console.log(shift4Data[m]);
    
//     //       }
//     //        console.log('///////////////'); 

// for (let i=0;i<numofemp;i++)
// {


//       await thursday.create({
//         shift1:shift1Data[i],
//         shift2:shift2Data[i],
//         shift3:shift3Data[i],
//         shift4:shift4Data[i],
//         thiswavailable:"true",
//         nextwavailable:"true",
//         idnum:empid[i]
//     });

// }
// // arr=[];
// shift1Data = [];
// shift2Data = [];
// shift3Data = [];
// shift4Data = [];
// }



// }


    
//   });











// // router.post("/signup",async(req,res)=>{
// //     const {username,email,phoneNumber,passworad,passworadRepeat} =req.body;
// //     console.log(req.body);
// //    const encryptedPassword = await bcrypt.hash(passworad,10);
// //    console.log(encryptedPassword);
// //    try{
// // //    const oldemp = await employee.findOne({email});
// // //     if(oldemp){
// // //        res.send({error:"Employee Exists"});
// // //     }

// //     await employee.create({
// //         name: username,
// //         email:email,
// //         phoneNumber:phoneNumber,
// //         password:encryptedPassword,
// //         reppassword:passworadRepeat,
// //     });
// //     res.send({status:"ok"})

// //    }
// //    catch(error){
// //     res.send({status:"error"})
// //    }

// // });

// // router.post("/signin",async(req,res)=>{
// //     const {email,passworad} =req.body;
// //   //  console.log(req.body);
// //   //  console.log(passworad);
// //    // console.log(employee.password);

// //    const emp = await employee.findOne({email});
// //   // console.log(emp.password);
// //    if(!emp){
// //     return res.json({error:"Employee Not found "});
// // }

// // if(await bcrypt.compare(passworad,emp.password)){
// //   //  const token = jwt.sign({name:emp.name},JWT_SECRET);

// //     if(res.status(201)){
// //         console.log(emp.name);
// //         return res.json({status:"ok",data:emp.name});
// //     }
// //     else{
// //         return res.json({error:"error"});
// //     }
// // }
// // return res.json({status:"error",error:"invalid password"});

// // });






// module.exports=router;