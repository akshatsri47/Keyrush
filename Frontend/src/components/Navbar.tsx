import { FaKeyboard } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaBell } from "react-icons/fa6";

 const Navbar = ()=>{
    return(
<>
<div className="flex items-center px-20  py-20   justify-between">
<div className=  "flex space-x-4">
<FaKeyboard size={48}  />
<MdLeaderboard size={48} />
</div>
<div>
<FaBell size={48} />

</div>

</div>



</>
    )

}
export default Navbar;