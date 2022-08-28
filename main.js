///Bai tap 1
document.getElementById("btnTinhLuong").onclick=function(){
    const LuongNgay=100000;
    var TongLuong=document.getElementById("LuongNV").value*1 *LuongNgay;

    document.getElementById("LuongNhan").innerHTML=TongLuong;
}
//Bai tap 2
document.getElementById("btnTinhTrungBinh").onclick=function(){
    var nb1=document.getElementById("number_1").value*1;
    var nb2=document.getElementById("number_2").value*1;
    var nb3=document.getElementById("number_3").value*1;
    var nb4=document.getElementById("number_4").value*1;
    var nb5=document.getElementById("number_5").value*1;
    var TBCong=(nb1 + nb2 +nb3 +nb4 +nb5)/5;
    document.getElementById("TrungBinhCong").innerHTML=TBCong;
}
//Bai tap 3
document.getElementById("chuyenTien").onclick=function(){
    var Tien=document.getElementById("MoneyVN").value*1;
    var Kqua=Tien*23000;
    document.getElementById("TienViet").innerHTML=Kqua;
}
//Bai tap 4
document.getElementById("btnTinh").onclick=function(){
    var CDai=document.getElementById("Dai").value*1;
    var CRong=document.getElementById("Rong").value*1;

    var S="Dien tich la: " + CDai*CRong;
    var P="Chu vi la: " + (CDai+CRong)*2;

    document.getElementById("ChuVi").innerHTML=P;
    document.getElementById("DienTich").innerHTML=S;    
}
//Bai tap 5
document.getElementById("btnTinhTong").onclick=function(){
    var So=document.getElementById("NumBer").value*1;
    var hangChuc=Math.floor(So/10);
    var hangDonVi=So%10;
    var KQ=hangChuc+hangDonVi;

    document.getElementById("Tong").innerHTML=KQ;
}