export interface IPatient{
    id?:number,
    patientName:string,
    ptProblem:string,
    age?:(number | string)
}
export interface IPatientTable{
    toda_all:IPatient[]
}