class Database{
    static _instance=null;
    record=[];
    constructor(){
        if(Database.instance){
            return Database.instance
        }
        Database.instance=this;
    }
    addRecord(data){
        this.record.push(data)
    }
    updateRecord(data){
     let index=this.record.indexOf(data);
     if (index !== -1) {
        this.record[index] = data;
      }
    }
    deleteRecord(data){
    let index=this.record.indexOf(data);
    if (index !== -1) {
        this.record.splice(index,1);
      }
    
    }
}

const db1 = new Database();
db1.addRecord("registro 1");
console.log(db1)
