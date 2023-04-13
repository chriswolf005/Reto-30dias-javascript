function arrayModified() {
    // Tu código aquí 👈
    Array.prototype.myFilter = function(callback) {
        let filteredArray = [];
        for(let i = 0; i < this.length; i++) {
          if(callback(this[i])) {
            filteredArray.push(this[i]);
          }
        }
        return filteredArray;
      };
  }
