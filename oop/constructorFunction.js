function Native(_firstName, _lastName, _scvID, _cohort) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    let scvID = _scvID;
    this.cohort = _cohort;

    this.setScvId = (newScvID) => {
        scvID = newScvID;
    }

    this.getScvID = () => {
        return scvID;
    }
}

let student1 = new Native("Aminada", "AKintomide", "0002107", "0001");
let student2 = new Native("Aminada", "AKintomide", "0002109", "0002");
student1.setScvId("0002106");
student1.getScvID();