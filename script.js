 var output=document.getElementById('wrapper');
            var holder;
            function dstart(){
                output.innerHTML="drag started";//when you start to drag the item, it will display the message
                holder=event.target;
            }
            function nDrop(){
                event.preventDefault();//this is used to prevent the default behaviour of dropping
            }
            function dDrop(){
                event.preventDefault();
                output.innerHTML="drop it";//when you drop the item, it will display this message
                if(event.target.className=='box'){
                    event.target.appendChild(holder);//this will enable us to drop it on the other box
                }
            }