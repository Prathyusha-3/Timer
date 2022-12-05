import React from 'react'

const  Display = ({days,hrs,mins,secs}) =>{
  return (
    <div>
        <h1>SALES COUNTDOWN TIMER</h1>
        <h2>OFFER ENDS IN</h2>
        <table>
          
                <tbody>
                    <tr>
                        <th>{days}</th>&nbsp;&nbsp;
                        <th>{hrs}</th>&nbsp;&nbsp;
                        <th>{mins}</th>&nbsp;&nbsp;
                        <th>{secs}</th>&nbsp;&nbsp;
                       </tr> 
                
                    <tr>
                        <td>DAYS</td>&nbsp;&nbsp;
                        <td>HOURS</td>&nbsp;&nbsp;
                        <td>MINUTES</td>&nbsp;&nbsp;
                        <td>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
         
        </table>

    </div>
  )
}
export default Display

