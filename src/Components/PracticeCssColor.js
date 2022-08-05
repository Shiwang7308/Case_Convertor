    import React, { useState } from 'react'

    export default function Practice() {
        // const myStyle = {
            
        // }
        const [myStyle, changeMyStyle]=useState({
            color:'black',
            backgroundColor:'white',
        });
        
        const toggleModeDark = ()=>{
            if(myStyle.backgroundColor==='white')
            {
                changeMyStyle({
                    color:'white',
                    backgroundColor:'black',
                });
            }
        }
            const toggleModeLight = ()=>{
                if(myStyle.backgroundColor==='black')
                {
                    changeMyStyle({
                        color:'black',
                        backgroundColor:'white',
                    });
                }
            }
            // else if(myStyle.backgroundColor==='black')
            // {
            //     changeMyStyle({
            //         color:'black',
            //         backgroundColor:'white',
            //     });
            // }

    return (
        <>
        <div className='container' style={myStyle}>
        <h1 >Hello world</h1>
        <div className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiak</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ipsam ex beatae, itaque aliquid vitae autem culpa ea soluta dolore quaerat possimus minus expedita odio quod! Repellendus a facilis, id unde delectus sequi dolorum. Soluta velit aliquam blanditiis unde sed praesentium! Illo nesciunt, totam minus eaque sequi possimus nostrum natus, dolorum odio nobis sed eveniet, aut debitis blanditiis! Quasi iste ab reiciendis? Accusamus iusto praesentium id odit adipisci, magni odio dolorum voluptatibus unde, at commodi eum distinctio sed provident quasi quidem ut expedita vitae eveniet quia aliquid molestiae dolor, perferendis debitis? Ullam aliquam libero harum, rerum illo fuga aut.</p>
        </div>
        <div className="container">
        <button className="btn btn-primary mx-3" onClick={toggleModeDark}>DarkMode</button>
        <button className="btn btn-primary" onClick={toggleModeLight}>LightMode</button>
        </div>
       
        </>

    )
    }       
