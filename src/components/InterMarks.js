import React, { useRef } from 'react'

function InterMarks() {

    let eng1InputRef = useRef();
    let san1InputRef = useRef();
    let maths1AInputRef = useRef();
    let maths1BInputRef = useRef();
    let phy1InputRef = useRef();
    let che1InputRef = useRef();
    let eng2InputRef = useRef();
    let san2InputRef = useRef();
    let maths2AInputRef = useRef();
    let maths2BInputRef = useRef();
    let phy2InputRef = useRef();
    let che2InputRef = useRef();
    let phyprac2Ref = useRef();
    let chemprac2Ref = useRef();

    let resultRef = useRef();

    let eng1ResultRef = useRef();
    let san1ResultRef = useRef();
    let maths1AResultRef = useRef();
    let maths1BResultRef = useRef();
    let phy1ResultRef = useRef();
    let che1ResultRef = useRef();
    let eng2ResultRef = useRef();
    let san2ResultRef = useRef();
    let maths2AResultRef = useRef();
    let maths2BResultRef = useRef();
    let phy2ResultRef = useRef();
    let che2ResultRef = useRef();
    let phyprac2ResultRef = useRef();
    let chemprac2ResultRef = useRef();

   let inputonFocus =(inputRef)=> {inputRef.current.style.backgroundColor = "yellow"; };

   let inputonBlur =(inputRef)=> {inputRef.current.style.backgroundColor = "";}

   let inputonChange =(inputRef,passMarks,resultRef,maxMarks = 100)=> 
   {
             let marks = inputRef.current.value;

           if(marks >= 0 && marks <= maxMarks){
                  if(marks >= passMarks){
                      resultRef.current.innerHTML= "Pass";
                      resultRef.current.style.backgroundColor= "yellow";}
                  else {
                     resultRef.current.innerHTML= "Fail";
                     resultRef.current.style.backgroundColor= "red";}
           }
           else{
               resultRef.current.innerHTML ="Invalid";
               resultRef.current.style.backgroundColor = "#FAA307";
           }
   }
    
  return (
    
    <div>
        
        <form>
        <h1><u>INTERMEDIATE MEMO</u></h1>
        <h2>I YEAR MARKS</h2>

            <div>
                <label>ENGLISH 1</label>
                <input ref={eng1InputRef} 
                    onFocus={()=>{inputonFocus(eng1InputRef);}}
                    onBlur={()=>{inputonBlur(eng1InputRef);}} 

                    onChange={()=>{inputonChange(eng1InputRef,35,eng1ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={eng1ResultRef}></span>
                    
            </div>
            <div>
                <label>SANSKRIT 1</label>
                <input ref={san1InputRef} 
                    onFocus={()=>{inputonFocus(san1InputRef);}} 
                     onBlur={()=>{inputonBlur(san1InputRef);}}

                     onChange={()=>{inputonChange(san1InputRef,35,san1ResultRef);}}
                     placeholder='Enter your marks'>
                    </input>
                    <span ref={san1ResultRef}></span>
            </div>
            <div>
                <label>MATHS A</label>
                <input ref={maths1AInputRef} 
                     onFocus={()=>{inputonFocus(maths1AInputRef);}}
                     onBlur={()=>{inputonBlur(maths1AInputRef);}}
                     onChange={()=>{inputonChange(maths1AInputRef,28,maths1AResultRef);}}
                     placeholder='Enter your marks'>
                     </input>
                     <span ref={maths1AResultRef}></span>
            </div>
            <div>
                <label>MATHS B</label>
                <input ref={maths1BInputRef} 
                    onFocus={()=>{inputonFocus(maths1BInputRef);}}
                    onBlur={()=>{inputonBlur(maths1BInputRef);}}
                    onChange={()=>{inputonChange(maths1BInputRef,28,maths1BResultRef);}}
                    placeholder='Enter your marks' >
                  </input>
                  <span ref={maths1BResultRef}></span>
            </div>
            <div>
                <label>PHYSICS 1</label>
                <input ref={phy1InputRef}
                    onFocus={()=>{inputonFocus(phy1InputRef);}}  
                    onBlur={()=>{inputonBlur(phy1InputRef);}}
                    onChange={()=>{inputonChange(phy1InputRef,21,phy1ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={phy1ResultRef}></span>
            </div>
            <div>
                <label>CHEMISTRY 1</label>
                <input ref={che1InputRef}
                    onFocus={()=>{inputonFocus(che1InputRef);}} 
                    onBlur={()=>{inputonBlur(che1InputRef);}}
                    onChange={()=>{inputonChange(che1InputRef,21,che1ResultRef);}}   
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={che1ResultRef}></span>
            </div>
           

            <h2>II YEAR MARKS</h2>

            <div>
                <label>ENGLISH 2</label>
                <input ref={eng2InputRef} 
                    onFocus={()=>{inputonFocus(eng2InputRef);}} 
                    onBlur={()=>{inputonBlur(eng2InputRef);}}
                    onChange={()=>{inputonChange(eng2InputRef,35,eng2ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={eng2ResultRef}></span>
            </div>
            <div>
                <label>SANSKRIT 2</label>
                <input ref={san2InputRef} 
                    onFocus={()=>{inputonFocus(san2InputRef);}} 
                    onBlur={()=>{inputonBlur(san2InputRef);}}
                    onChange={()=>{inputonChange(san2InputRef,35,san2ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={san2ResultRef}></span>
            </div>
            <div>
                <label>MATHS 2A</label>
                <input ref={maths2AInputRef} 
                    onFocus={()=>{inputonFocus(maths2AInputRef);}}
                    onBlur={()=>{inputonBlur(maths2AInputRef);}}
                    onChange={()=>{inputonChange(maths2AInputRef,28,maths2AResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={maths2AResultRef}></span>
            </div>
            <div>
                <label>MATHS 2B</label>
                <input  ref={maths2BInputRef} 
                    onFocus={()=>{inputonFocus(maths2BInputRef);}} 
                    onBlur={()=>{inputonBlur(maths2BInputRef);}}
                    onChange={()=>{inputonChange(maths2BInputRef,28,maths2BResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={maths2BResultRef}></span>
            </div>
            <div>   
                <label>PHYSICS 2</label>
                <input ref={phy2InputRef}
                    onFocus={()=>{inputonFocus(phy2InputRef);}} 
                    onBlur={()=>{inputonBlur(phy2InputRef);}}
                    onChange={()=>{inputonChange(phy2InputRef,21,phy2ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={phy2ResultRef}></span>
            </div>
            <div>
                <label>CHEMISTRY 2</label>
                <input ref={che2InputRef} 
                    onFocus={()=>{inputonFocus(che2InputRef);}} 
                    onBlur={()=>{inputonBlur(che2InputRef);}}
                    onChange={()=>{inputonChange(che2InputRef,21,che2ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={che2ResultRef}></span>
            </div>
            <div>
                <label>PHYSICS PRACTICAL 2</label>
                <input ref={phyprac2Ref} 
                    onFocus={()=>{inputonFocus(phyprac2Ref);}} 
                    onBlur={()=>{inputonBlur(phyprac2Ref);}}
                    onChange={()=>{inputonChange(phyprac2Ref,11,phyprac2ResultRef);}}
                    placeholder='Enter your marks'>
                    </input>
                    <span ref={phyprac2ResultRef}></span>
            </div>
            <div>
                <label>CHEMISTRY PRACTICAL 2</label>
                <input ref={chemprac2Ref}
                    onFocus={()=>{inputonFocus(chemprac2Ref);}}
                    onBlur={()=>{inputonBlur(chemprac2Ref);}}
                    onChange={()=>{inputonChange(chemprac2Ref,11,chemprac2ResultRef);}}
                    placeholder='Enter your marks'>

                    </input>
                    <span ref={chemprac2ResultRef}></span>
            </div>
            <div>
            <button type='button' onMouseMove ={()=>{
                                                
                                                // alert(eng1InputRef.current.value);
                                                // alert(san1InputRef.current.value);
                                                // alert(maths1AInputRef.current.value);
                                                // alert(maths1BInputRef.current.value);
                                                // alert(phy1InputRef.current.value);
                                                // alert(che1InputRef.current.value);
                                                // alert(eng2InputRef.current.value);
                                                // alert(san2InputRef.current.value);
                                                // alert(maths2AInputRef.current.value);
                                                // alert(maths2BInputRef.current.value);
                                                // alert(phy2InputRef.current.value);
                                                // alert(che2InputRef.current.value);
                                                // alert(phyprac2Ref.current.value);
                                                // alert(chemprac2Ref.current.value);
                                                
                                                 let eng1Marks = Number(eng1InputRef.current.value);
                                                 let san1Marks = Number(san1InputRef.current.value);
                                                 let maths1AMarks = Number(maths1AInputRef.current.value);
                                                 let maths1BMarks = Number(maths1BInputRef.current.value);
                                                 let phy1Marks = Number(phy1InputRef.current.value);
                                                 let che1Marks = Number(che1InputRef.current.value);
                                                 let eng2Marks = Number(eng2InputRef.current.value);
                                                 let san2Marks = Number(san2InputRef.current.value);
                                                 let maths2AMarks = Number(maths2AInputRef.current.value);
                                                 let maths2BMarks = Number(maths2BInputRef.current.value);
                                                 let phy2Marks = Number(phy2InputRef.current.value);
                                                 let che2Marks = Number(che2InputRef.current.value);
                                                 let phyprac2Marks = Number(phyprac2Ref.current.value);
                                                 let chemprac2Marks = Number(chemprac2Ref.current.value);
                                                 
                let totalMarks = eng1Marks+san1Marks+maths1AMarks+maths1BMarks+phy1Marks+che1Marks+
                                 eng2Marks+san2Marks+maths2AMarks+maths2BMarks+phy2Marks+che2Marks+phyprac2Marks+chemprac2Marks;

                let perc = (totalMarks/1000)*100;
                
                //alert(totalMarks);
                resultRef.current.innerHTML = `STUDENT NAME : SHARATH KYATHAM <BR>
                                               TOTAL MARKS SECURED : ${totalMarks} <BR> 
                                               IN  PERCENTAGE : ${perc.toFixed(0)}% `;
            }}
                >CALCULATE</button>
            </div>
            <p ref={resultRef}></p>
            <marquee>Designed by _Sharath Kyatham</marquee>
        </form>
        
    </div>
  )
}

export default InterMarks