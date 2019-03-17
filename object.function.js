var student= {
    name: 'Abhith',
    mark: 0,
    addMark: function(currentMark){
        if(typeof currentMark === 'number'){
            this.mark += currentMark;
        }            
        else {
            console.log('this is not a valid value');
        }     
    },
    showResult: function(){
        console.log(this.name + ' has a total mark of ' + this.mark);
    }
};

student.addMark(10);
student.addMark('20');
student.showResult();