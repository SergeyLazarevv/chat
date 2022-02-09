const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs')

export default class Authentification {

    protected accessList = {
        'auth': ["USER", "ADMIN", "MANAGER"],
        'user': ["USER", "ADMIN", "MANAGER"],
        'administration': ["ADMIN", "MANAGER"]
    }

    public static async generateHashPassword(password: string): Promise<string> {

        return await bcrypt.hash(password, 3).then((hash) => hash);
    }

    public static async verifyHashPassword(password: string, hashPassword: string): Promise<any> {

        return await bcrypt.compare(password, hashPassword).then((hash) => hash);
    }

    public static async generateAccessToken(payload: any): Promise<any> {

        const key = fs.readFileSync(__dirname+'/../../jwtRS256.key')
        return jwt.sign(payload, key)
    }

    public static async verifyToken(token: string): Promise<any> {
        
        const key = fs.readFileSync(__dirname+'/../../jwtRS256.key')
        return jwt.verify(token, key)
    }

    public static async checkAuth(request, response, next) {

        try {
            if(request.originalUrl != '/auth/registration' && request.originalUrl != '/auth/login') {

                const key = fs.readFileSync(__dirname+'/../../jwtRS256.key')
                const authHeader = request.headers['authorization']
                console.log('authHeader', authHeader)
                const token = authHeader ? authHeader : 'null' //authHeader.substring(7)
                //TODO: set pathList
                if (token == 'null') {
                    console.log('BAD_AUTH')
                    return 'BAD_AUTH'
                } else {
                    console.log('token ', token)
                    const decodeToken = jwt.verify(token, key)
                    console.log('tokennn', token)
                    console.log('decode', decodeToken)
                    console.log('RRR', request.originalUrl)
                    next()
                }
            } else {
                next()
            }
            
        } catch(error) {
            console.log('auth error', error)
        }
    }
}