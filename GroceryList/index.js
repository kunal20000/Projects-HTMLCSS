let noOfClick=0;

 const tBody = document.querySelector('tbody');

function calcTotal() {
    if(noOfClick>0){
        const lastChild = tBody.lastChild;
        tBody.removeChild(lastChild);
    }
     // select all values has attributs data-ns-test

    const dataEl = document.querySelectorAll('[data-ns-test=price]');
     //calculate sum
     let result = 0;
     dataEl.forEach((el)=>{
         //access the content
         // convert a number
       result += parseInt(el.textContent);
     })
     //create row
     const tRow = document.createElement('tr');
      // create td
     const tDataOne = document.createElement('td');

     tDataOne.textContent = 'Grand Total';
     //create second td
     const tDataTwo = document.createElement('td');

     tDataTwo.setAttribute('data-ns-test', 'grandTotal');

     //write sum inside it
     tDataTwo.textContent= result;
     //append inside a row
     tRow.appendChild(tDataOne);
     tRow.appendChild(tDataTwo);
     //append inside a table
     tBody.appendChild(tRow);
     noOfClick++;
}