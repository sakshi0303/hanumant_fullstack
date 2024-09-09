//map,foreach, to do repeted task
// spread opreator
//map is a function that has callback functiin it return new array
// in return use {} for javascript 
// map has to return something in div, or itself 
// bookstap red: table-red 
// <table className="table table-dark">
// in map  values should be just after return not in next line
// control format document through typescript javascript
// in table put 1 header and use only one row to put inside return 
// https://getbootstrap.com/docs/5.3/components/buttons/#base-class button designing
// my-3, p-3
// IN BOOTSTAMP AND TAIlwind: MAX 12 COLUMSN IN TABLES
// in react we give obj as css value inside {obj} <form style={{width:20px}}/>
// input elelemt : UseRef , onchange will run the component every again 
// useref hook let you refrence any elemet  // sno:snoref.current.val
// form has onsubmit
// button has onclick  
// in form whenever we  use submit buton the page will refresh for sure -------e.preventDefault() 
// in javascript we call, in react w dont call function on onclick event
// for call by refrence arr=[1,2,3] array=arr then both will point to the same addressb let arr=[... ans,10] obj={...obj2}
// spread opreator is used to copy the element(collection of data like array,obj) of array or object into new array or object
// setx([...x,10]) 
// ush use state hook

// > step 1; map methond to diplay
// > form that has 3 input text tag and 1 button
// > declare 3 userref
// > value will not go by itself,  inside input text tag and use ref={placeref}
// > when button is click onsubmit event is triggered
// > form with onsbmit will bydefault reload the page 
// > create obj and use cnowrew.curent.value
// > array should be useState ush
// map has 2 munction arr.map((obj,i) it starts with 0
// each line in the unique key in map it should return key that unique value key={obj.id}
// id will do delete and update



// deLETE function 

// arr.splice(startingind, no of items delelte,items ided)
// arr.splice(2,1)
//in react use onlick onlcij={()=>{handlesubmit()}}
//(true? true value:false value )
// conditional rendering
        // ternary oprator 
        // && operator 

 // spread opreator

//  useRef: re-render everytime
//  onchange; everytime page rerender

//setarr([...arr,obj]) spread operato 
// slice will give the array of that specific element

import React, { useRef, useState } from 'react'


const ExpenseTracker = () => {
    let snoRef=useRef('')
    let placeRef=useRef('')
    let priceRef=useRef('')
    let headingref=useRef('')
    const [clicked, setclicked] = useState(false);
    const [arr, setarr] = useState([
        {
            id: 1,
            price: 1000,
            place: "lucknow",

        },
        {
            id: 2,
            price: 2000,
            place: "food",

        },
        {
            id: 3,
            price: 3000,
            place: "traveling",

        },
        {
            id: 4,
            price: 400,
            place: "pentrol",

        },

    ]);
  
   console.log(headingref.current.innerHTML);

    const handlesubmit=(e)=>{
        console.log("running");
        e.preventDefault()
        let obj={
            id:snoRef.current.value,
            place:placeRef.current.value,
            price:priceRef.current.value

        }
        console.log(obj);
        if (obj.id && obj.place && obj.price){
            // spread opreator
            setarr([...arr,obj]) 

        }else{
            alert("please enter all fields values")
        }
        
        //arr.push(obj)
        console.log(arr);

    }
    const handledelete=(obj,index)=>{
        //method -1
        // let copyArr=[...arr]
        // copyArr.splice(index,1)
        // console.log(copyArr);
        // setarr(copyArr)

        //method-2 
        let i=arr.findIndex((ele)=>ele.id===obj.id)
        console.log(i);
        let copyArr2=[...arr]
        copyArr2.splice(i,1)
        console.log(copyArr2);
        setarr(copyArr2)


        //method 3 
        // keep the item taht mateches the condition and return the array
        // let filterdarray=arr.filter((ele)=>ele.id!==obj.id)
        // console.log(filterdarray);
        // setarr(filterdarray)


    }
    return (
        <div>
            <h1 className='text-center'>expense tracker App</h1>
            {/* <h2 ref={headingref} >sdss</h2> */}

            {/* {
    arr.map((obj)=>{
            return <div>
                <p className='text-center'>{obj.place}</p>
                <p className='text-center'>{obj.price}</p>
            </div>

        })
      } */}
            <div className='text-center'>
            <button onClick={()=>{setclicked(true)}} className='bg-info my-3'> Add Expense</button>
            </div>
            

            {/* //in react  use {} for condition*/}
            { clicked && <form style ={{width:"max-content"}}action="" className='d-flex bg-dark gap-2 my-3 rounded mx-auto p-3 ' >
                <button onClick={()=>{setclicked(false)}}type="button" class="btn-close close" aria-label="Close"></button>
                <input type="number" name="" id="" placeholder='enter serial number' ref={snoRef}/>
                <input type="number" name="" id="" placeholder='enter price' ref={placeRef}/>
                <input type="text" name="" id="" placeholder='enter place' ref={priceRef} />
                <button onClick={handlesubmit}className='btn btn-success' >Add Item</button>
            </form>}
            <table className="table table-dark w-75 m-auto text-center"> 
                <thead>
                    <tr>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Place</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((obj,index) => {
                            // values should be just after return not in next line 
                            //by default index is zero
                            return <tr key={obj.id}>
                                <th scope="row">{index+1}</th>
                                <td>{obj.place}</td>
                                <td>{obj.price}</td>
                                <td><button onClick={()=>handledelete(obj,index)} className='btn btn-info'>delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default ExpenseTracker
