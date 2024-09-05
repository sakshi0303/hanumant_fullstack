//map,foreach, to do repeted task
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
import React from 'react'

const ExpenseTracker = () => {
    let arr = [
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

    ]
    function add(){
        console.log("add click event running");

    }
    return (
        <div>
            <h1 className='text-center'>expense tracker App</h1>

            {/* {
    arr.map((obj)=>{
            return <div>
                <p className='text-center'>{obj.place}</p>
                <p className='text-center'>{obj.price}</p>
            </div>

        })
      } */}


            <form action="" className='my-3 p-3 w-75' >
                <input type="number" name="" id="" placeholder='enter serial number' />
                <input type="number" name="" id="" placeholder='enter price' />
                <input type="text" name="" id="" placeholder='enter place' />
                <button className='btn btn-success' onClick={add()}>Add Item</button>
            </form>
            <table className="table table-dark"> 
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
                        arr.map((obj) => {
                            // values should be just after return not in next line
                            return <tr>
                                <th scope="row">{obj.id}</th>
                                <td>{obj.place}</td>
                                <td>{obj.price}</td>
                                <td><button className='btn btn-info'>delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default ExpenseTracker
