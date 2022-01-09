const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// interface PersistedPassword {
//     salt: string;
//     hash: string;
//     iterations: number;
// }

export default class Authentification {

    // protected tokenKey = '1a2b-3c4d-5e6f-7g8h'
    // protected static PASSWORD_LENGTH = 256;
    // protected static SALT_LENGTH = 64;
    // protected static ITERATIONS = 10000;
    // protected static DIGEST = 'sha256';
    // protected static BYTE_TO_STRING_ENCODING = 'hex';

    public static async generateHashPassword(password: string): Promise<string> {

        return await bcrypt.hash(password, 3).then((hash) => hash);
    }

    public static async generateAccessToken(payload: any): Promise<any> {

        let accessToken
        jwt.sign(payload, { algorithm: 'RS256' }, function(err, token) {
            console.log('USER TOKEN', token);
            accessToken = token
        });

        return accessToken
    }
}