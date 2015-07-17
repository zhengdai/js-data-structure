/**
 * Created by 79848_000 on 2015/7/17.
 */
function StudentGrade(){
    this.grades = [];
}

StudentGrade.prototype.add = function(value){
    this.grades.push(value);
};

StudentGrade.prototype.avg = function(){
    var len = this.grades.length, total = 0;
    if(len > 0) {
        for(var i = 0; i < len; ++i) {
            total += this.grades[i];
        }
        return total/len;
    }
    return 0;
};

var sg = new StudentGrade();
sg.add(90);
sg.add(80);
console.log(sg.avg());