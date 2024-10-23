import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./redux/features/counterSlice";


function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="py-40 text-center">
    <h1 className="text-3xl font-bold m-10" >Counter</h1>

      <div className="border border-black rounded-xl w-fit mx-auto px-16 py-8 ">
        <h1 className="text-center mb-6 text-2xl font bold" >{count}</h1>
        <div className="flex justify-center items-center gap-10">
          <button className="border border-black rounded-xl w-28 p-2" onClick={()=> dispatch(increment())} >Add</button>
          <button className="border border-black rounded-xl w-28 p-2" onClick={()=> dispatch(reset({value : 0}))} >Reset</button>
          <button className="border border-black rounded-xl w-28 p-2" onClick={()=> dispatch(decrement())}>Subtract</button>
        </div>
      </div>
    </div>
  )
}

export default App
