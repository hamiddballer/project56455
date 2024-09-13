class student{
    constructor(name,year)
{
    this.name=name
    this.year=year
}
age(){
    var date=new Date()
    return date.getFullYear()-this.year
}
}
s1=new student(" Abdul ",2017)
document.getElementById("student1").innerHTML=" my name is "+s1.name+" i was born in "+s1.year+" my age is "+s1.age()
s2=new student("Miyaz",2012)
document.getElementById("student2").innerHTML=" my name is "+s2.name+" i was born in "+s2.year+" my age is "+s2.age()