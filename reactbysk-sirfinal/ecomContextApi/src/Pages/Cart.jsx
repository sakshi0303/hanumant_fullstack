// we cant display data through props.cartdata directly on ui, we can log it
// text-center // heading text on table header in beteenn
// for update   obj.course="sd"  delete obj.name
// um.toFixed(2)} will make the price in string and show only 2 decial point
import React from 'react'

const Cart = () => {
  let arr=[]
  let sum=0
  const handleDelete =(obj,idx)=>{

  }

  const handleincrement=(obj,i)=>{
  }

  const handledecrement=(obj,i)=>{
  }
  

  // const handleDelete =(obj,idx)=>{

  //   let copyarr=[...props.cartdata]
  //   copyarr.splice(idx,1)
  //   props.setcartdata(copyarr)

  // }

  // let sum=0
  // props.cartdata.forEach((ele)=>{
  //   sum+=ele.price
  // })

  // const handleincrement=(obj,i)=>{
  //   // opdate the element
  //   let updatedobj={
  //     ...obj,
  //     quantity:obj.quantity+1,
  //     price:obj.price+(obj.price/obj.quantity)
  //   }
  //   console.log(updatedobj);

  //   // update in array
  //   let copyarr=[...props.cartdata]
  //   copyarr[i]=updatedobj
  //   props.setcartdata(copyarr)



  // }
  // const handledecrement=(obj,i)=>{
  //   console.log(obj);

   
  //   let updatedobj={
  //     ...obj,
  //     quantity:obj.quantity-1,
  //     price:obj.price-(obj.price/obj.quantity)
  //   }
  //   if (updatedobj.quantity<1){
  //     handleDelete(obj,i)
  //     return
  //   }
  //   console.log(updatedobj);
    
  //   let copyarr=[...props.cartdata]
  //   copyarr[i]=updatedobj
  //   props.setcartdata(copyarr)

  // }

  return (
    <div>
      {/* <table style={{marginTop:"200px"}} className="table table-dark align-middle text-center"></table> */}
      <table className="table table-dark align-middle text-center">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
    arr.map((ele,index)=>{
      return  <tr>
      <th scope="row">{index+1}</th>
      <td><img src={ele.thumbnail} alt="" height={'150'} width={'150'}/></td>
      <td>{ele.title}</td>
      <td>{ele.price.toFixed(2)} $</td>
      <td><button onClick={()=>handleincrement(ele,index)}className='btn btn-info mx-1'>+</button>{ele.quantity} <button  onClick={()=>{handledecrement(ele,index)}}className='btn btn-info mx-1'>-</button></td>
      <td> <button onClick={()=>handleDelete(ele,index)} className='btn btn-danger'>delete</button></td>
      

    </tr>

    })
  }
    
  </tbody>
</table>
<h3 className='text-center my-2'>Total={sum.toFixed(2)} $</h3>
    </div>

  )
}

export default Cart