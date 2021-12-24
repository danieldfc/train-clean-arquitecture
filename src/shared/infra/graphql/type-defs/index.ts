import base from './base';
import { userTypes } from '@/modules/users/infra/graphql/type-defs';

const typeDefs = [base, userTypes];

export { typeDefs };
