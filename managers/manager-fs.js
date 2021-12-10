import fs from 'fs';

// afegiu codi ... (2pto)
export class ManagerFs {
    constructor(_file) {
        this.filename=_file
    }
    getData() {
        return JSON.parse(fs.readFileSync(this.filename, "utf8"))

    }
}



