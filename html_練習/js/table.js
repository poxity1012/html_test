//新增數據函數
function addrow(){
    let table = document.getElementById("table1");
    // console.log(table);
    //獲取插入的位址
    var length1 = table.rows.length;
    //console.log(length1);
    //插入行節點
    let newrow = table.insertRow(length1);
    console.log(newrow);
    //newrow.innerHTML = '123'
    // 插入列節點對象
    let name_clumn = newrow.insertCell(0);
    let phone_clumn = newrow.insertCell(1);
    let action_clumn = newrow.insertCell(2);

    //修改節點文本內容
    name_clumn.innerHTML= "未命名"
    phone_clumn.innerHTML = "無聯繫方式"
    action_clumn.innerHTML = "<button onclick='editRow(this)'>編輯</button><button onclick='deleteRow(this)'>刪除</button>"

}


//刪除數據函數
function deleteRow(button){
    let row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}  

//編輯數據函數
function editRow(button){
    let row = button.parentNode.parentNode;
    let name = row.cells[0];
    let phone = row.cells[1];

    let inputName = prompt("請輸入名子: ");
    let inputPhone = prompt("請輸入電話號碼: ");

    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;





}


