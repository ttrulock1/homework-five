const date=new Date();

$("#currentDay").text(date.toLocaleDateString());

const rows= $(".time-block");
const currenthour= date.getHours();
const data=getdata();

let foundcurrenthour=false;
$.each(rows ,function(i,row){
    if(row.id==="Hour" + currenthour){
        $(row).find("textarea").addClass("present");
        foundcurrenthour=true;
    }
    else{
        if(foundcurrenthour){
            $(row).find("textarea").addClass("future");
        }
        else{
            $(row).find("textarea").addClass("past");
        }
    }
    if(data[row.id]){
        $(row).find("textarea").val(data[row.id]);
    }
    $(row).find("button").on("click",function(){
        data[row.id]=$(row).find("textarea").val();
        setdata(data);
    });
} );

function getdata(){
    let data=localStorage.getItem("appointmentdetails") || "{}";
    return JSON.parse(data);
}
function setdata(data){
        localStorage.setItem("appointmentdetails", JSON.stringify(data));
}