var button=document.getElementsByClassName("button");
var result=document.getElementsByClassName("result")[0];
var result1=document.getElementsByClassName("result1")[0];

var operator1="";
var operand=null;
var value;
for(var i=0;i<button.length;i++)
{
      button[i].addEventListener('click', say);
      
      
}
console.log('sdsss');
var prev=null;
      function say()
      {
          var x=this.getAttribute('data-value');
          if(x=='AC')
          {
            result.innerText="";
            result1.innerText="";
            operator1="";
          }
          else if(x=='.')
          {
             if(result.textContent.includes('.'))
             {
              result.innerText="Error";
             
               return;

             }
             result.innerText+=".";

             result1.innerText+=".";


          }
          else if(x=='+/-')
          {
              var y=result.textContent;
              var z=result.textContent.length;
              var str=result1.textContent;
              result1.innerText=str.substring(0,str.length-z);
            result.innerText="";
            result.innerText=eval("-1*y");
            result1.innerText+=result.innerText;
            
              
          }
           else if(x=='+'||x=='-'||x=='*'||x=='/'||x=='%')
           {
               if(!(prev=='*'&&x=='-')&&(prev=='+'||prev=='-'||prev=='*'||prev=='/'||prev=='%'))
               {
                result.innerText="Error";
                

                return ;
               }
               if(operand=='/'&&parseFloat(result.textContent)==0)
                  {
                    result.innerText="Error";
                   

                    return ;
                  }
               
               operand=x;
               operator1+=result.textContent+x;
               result.innerText="";
               result1.innerText+=x+" ";
              
           }
           else if(x=='=')
           {
            if(operand=='/'&&parseFloat(result.textContent)==0)
            {
              result.innerText="Error";
              
              return ;
            }
               operator1+=" "+result.textContent;
               result.innerText=eval(operator1);

               operator1="";
               

           }
           else
           {
             result.innerText+=x;
             result1.innerText+=x+"";
              


           }
          prev=x;
          return true;
           
      }
