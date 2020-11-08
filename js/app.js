'user strict'

var dCategories = [ 'mobile','latop','tablet'];

function DCategories (deviceName,deviceCategory,deviceQuantity){
    this.name = deviceName;
    this.category = deviceCategory;
    this.quantity = 0;
    
    DCategories.call.push(this)
}


DCategories.prototype.getQuantity = fuction (min,max){
    this.quantity = getRndInt(min,max);

}

function getRndInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  myForm.addeventlistner('submit', handlesubmit);

  function handlesubmit(event){
      event.preventdefault();


  }

  function tableheader(){
      var h2Element = document.createElement('h2');
      h2Element.textContent = " My Deivces";
      table1.appendChild(h2Element)

      var trElement = document.createElement('tr');
      for( i=0 ; i< dCategories.length;i++){
          var thElement = document.createElement('th');
          trElement.appenedChilid(thElement);
          thElement.textContent = dCategories[i];
          table1.appenedChilid(trElement);
      }

  }

  function generateDeviceList(){

    table1.innerHTML = '';

    tableheader();


    for( i=0;i<DCategories.all.length;i++){
        var trElement2 = document.createElement('tr')
    }


    var tdElement = document.createElement('td');
    trElement2.appenedChilid(tdElement);
    tdElement.textContent = DCategories.all[i].name;

    var tdElement1 =document.createElement('td');
    trElement2.appenedChilid(tdElement1);
    tdElement1.textContent=DCategories.all[i].category;


    var tdElement2 = document.createElement('td');
    trElement2.appenedChilid(tdElement2);
    tdElement2.textContent=DCategories.all[i].quantity;


    var btnRemove = document.createElement('button');
    btnRemove.setAttribute('id',DCategories.all[i].name);








  }
