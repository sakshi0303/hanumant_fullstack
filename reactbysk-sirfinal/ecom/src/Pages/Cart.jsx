// we cant display data through props.cartdata directly on ui, we can log it
// text-center // heading text on table header in beteenn
import React from 'react'

const Cart = (props) => {
  
  console.log(props.cartdata);

  const handleDelete =(obj,idx)=>{

    let copyarr=[...props.cartdata]
    copyarr.splice(idx,1)
    props.setcartdata(copyarr)

  }

  return (
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
    props.cartdata.map((ele,index)=>{
      return  <tr>
      <th scope="row">{index+1}</th>
      <td><img src={ele.thumbnail} alt="" height={'150'} width={'150'}/></td>
      <td>{ele.title}</td>
      <td>{ele.price} $</td>
      <td>{1}</td>
      <td> <button onClick={()=>handleDelete(ele,index)} className='btn btn-danger'>delete</button></td>

    </tr>

    })
  }
    
  </tbody>
</table>
  )
}

export default Cart