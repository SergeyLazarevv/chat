const crypto = require('crypto');

interface PersistedPassword {
    salt: string;
    hash: string;
    iterations: number;
}

export default class Authentification {

    protected tokenKey = '1a2b-3c4d-5e6f-7g8h'
    protected static PASSWORD_LENGTH = 256;
    protected static SALT_LENGTH = 64;
    protected static ITERATIONS = 10000;
    protected static DIGEST = 'sha256';
    protected static BYTE_TO_STRING_ENCODING = 'hex';

    public static async generateHashPassword(password: string): Promise<PersistedPassword> {

        const salt = crypto.randomBytes(Authentification.SALT_LENGTH).toString(Authentification.BYTE_TO_STRING_ENCODING);
        let response
        console.log('1')
        await crypto.pbkdf2(password, salt, Authentification.ITERATIONS, Authentification.PASSWORD_LENGTH, Authentification.DIGEST, async (error, hash) => {
            if (error) {
                console.log('err', error);
            } else {
                response = {
                    salt,
                    hash: hash.toString(Authentification.BYTE_TO_STRING_ENCODING),
                    iterations: Authentification.ITERATIONS,
                };
                console.log('2', response)
            }
        });
        console.log('3')
        return response
        // const sha256 = crypto.createHash('sha256');
        // const hash = sha256.update(password).digest('base64');
        // return hash;
    }
}