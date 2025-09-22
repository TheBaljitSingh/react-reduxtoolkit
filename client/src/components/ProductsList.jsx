import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

export default function ProductsList() {
  const dispatch = useDispatch();
  //status which is defined in the productSlice
  //useSelector is used to get the data from the Store
  const { items, total, status, error } = useSelector((state) => state.products);
  const [isEditing, setIsEditing] = useState(false);

  const[page, setPage] = useState(1);
  const limit = 10;
  const [tempPage, setTempPage] = useState(page);
  

  useEffect(() => {
      dispatch(fetchProducts({page, limit}));
  }, [dispatch, page]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const totalPages = Math.ceil(total/limit); // ceil of  13/3 = 5


  const handleChange = (e)=>{
    if( isNaN(e.target.value)){
      return;
    }
    setTempPage(e.target.value);
  }
  const handleKeyDown = (e)=>{
    // after update only on hitting the enter
    if(e.key==='Enter'){
      let newPage = Number(tempPage);

      if(newPage<1) newPage = 1;
      if(newPage >totalPages) newPage=totalPages;
      setPage(tempPage);
    }

    setTempPage(prev=>(e.target.value));
  }
  
  return (
   <div className="flex flex-col h-screen w-full bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Products <span className="text-gray-500">({total})</span>
      </h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-left border-b">ID</th>
              <th className="px-4 py-3 text-left border-b">Title</th>
              <th className="px-4 py-3 text-left border-b">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p, idx) => (
              <tr
                key={p.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
              >
                <td className="px-4 py-2 border-b">{p.id}</td>
                <td className="px-4 py-2 border-b">{p.title}</td>
                <td className="px-4 py-2 border-b font-medium ">
                  ${p.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div className="flex justify-end space-x-2 text-blue-500">
          <button onClick={()=>setPage(p=>p-1)} disabled={page===1} className="hover:cursor-pointer" >prev</button>
            <span ><input  value={tempPage} onChange={handleChange} onKeyDown={handleKeyDown} className="w-6 text-right  rounded outline-none" /> /{totalPages}</span>
          <button onClick={()=>setPage(p=>p+1)} disabled={page===totalPages} className="hover:cursor-pointer" >next</button>
        </div>
    </div>
  );
}
