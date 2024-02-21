import Credentials from "next-auth/providers/credentials";

export const authOption = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user ={id : "id" , username : "hallo" , email : "email@gmail.com"}
                return user
            },
        })
    ]
}
