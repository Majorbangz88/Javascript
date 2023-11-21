class Native {

    constructor(_firstName, _lastName, _scvID, _cohort) {

        this.firstName = _firstName;
        this.lastName = _lastName;
        this.scvID = _scvID;
        this.cohort = _cohort;
    
        setScvId = (newScvID) => {
            scvID = newScvID;
        }
    
        getScvID = () => {
            return scvID;
        }

    }
    
}
Native.prototype.hasLaptop = true;
let student1 = new Native("Joel", "Chukwu", "00000BIrk7", 17);
Native.setScvId("00000BIrk89")
console.log(Native.getScvID);
