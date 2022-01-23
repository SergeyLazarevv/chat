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

    public static async generateAccessToken(payload: any): Promise<any> {

        const key = fs.readFileSync(__dirname+'/../../jwtRS256.key')
        return jwt.sign(payload, key)
    }

    public static async checkAuth(request, response, next) {

        try {

            const key = fs.readFileSync(__dirname+'/../../jwtRS256.key')
            const token = request.headers['authorization'].substring(7)
            const decodeToken = jwt.verify(token, key)

            console.log('tokennn', token)
            console.log('decode', decodeToken)
            console.log('RRR', request.originalUrl)
            next()
        } catch(error) {
            console.log('auth error', error)
        }
    }
}