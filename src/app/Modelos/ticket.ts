export class Ticket {
    public displacement: string;
    public licensePlate: string;
    public typeVehicle: string;
    public entry: string;

    constructor(displacement = '', licensePlate = '', entry = '', typeVehicle = '') {
        this.displacement = displacement;
        this.licensePlate = licensePlate;
        this.entry = entry;
        this.typeVehicle = typeVehicle;
    }
};