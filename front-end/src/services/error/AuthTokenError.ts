export class AuthTokenError extends Error {
    constructor(){
        super('Error ao se autenticar.')
    }
}