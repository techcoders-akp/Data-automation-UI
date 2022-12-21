import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SearchIcon from '@mui/icons-material/Search';
import { Chip } from '@mui/material';
import TextField from "@mui/material/TextField";

const UIRenderer = () => {
  return (
    // 
    <>
    <div className='flexColumn' >
      <button className='flexButton'><AccountBalanceIcon/></button>
      <button className='flexButton1'><AccountBalanceIcon/></button>
      <button className='flexButton1'><AccountBalanceIcon/></button>
      <button className='flexButton1'><AccountBalanceIcon/></button>
      <button className='flexButton1'><AccountBalanceIcon/></button>
    

    </div>

    <div class="navbar">
        <button className='flexButton2'><AccountBalanceIcon/></button>
        <button className='flexButton2'><AccountBalanceIcon/></button>
        <button className='flexButton2'><AccountBalanceIcon/></button>
        <button className='flexButton3'><SearchIcon/></button>


</div>
<h1>Automation</h1>
    </>
  )
}

export default UIRenderer