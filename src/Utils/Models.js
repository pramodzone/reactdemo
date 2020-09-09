import { getRandomId } from "./Utils"

export class User {
    userId = getRandomId()
    name = ""
    email = ""
    password = ""
}

export class Encounters {
    encounterId = 0
    encounterType = ""
    isDeleted = false  
}