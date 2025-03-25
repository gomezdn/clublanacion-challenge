export const {
    ACCOUNTS_URL: accountsUrl
} = process.env;

(
    () => {
        if (!accountsUrl) {
            throw new Error('Missing accounts data URL in .env file')
        }
    }
)()