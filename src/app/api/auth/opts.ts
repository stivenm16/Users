import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password', placeholder: '*****' },
      },
      async authorize(credentials, req): Promise<any> {
        const userFound = {
          userName: 'test',
          email: '',
        }
        if (!userFound) throw new Error('No user found')

        return {
          email: credentials?.email,
          password: credentials?.password,
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: any) {
      if (user) token.user = user
      return token
    },
    async session({ session, user }: any) {
      const userFound = {
        id: 1,
        userName: 'test',
        email: '',
        role: 'admin',
      }
      session.user.role = userFound.role
      session.user.userId = userFound.id
      return session
    },
  },
  pages: {
    signIn: '/auth/posts',
  },
}
