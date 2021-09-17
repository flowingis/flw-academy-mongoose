export type Role = 'MAINTAINER' | 'DRIVER' | 'ADMIN';

export type User = {
    id: string,
    nickname: string,
    firstname: string,
    lastname: string,
    roles: Role[]
}