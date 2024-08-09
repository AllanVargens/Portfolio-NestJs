import { env } from 'process';

export const jwtConstants = {
  secret: env.JWT_CONSTANT,
};

// export const IS_PUBLIC_KEY = 'isPublic';
// export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
