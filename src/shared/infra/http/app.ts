import express from 'express';

import { setupApolloServer } from '@/config/apollo-server';

import '@/shared/infra/typeorm';

const app = express();

setupApolloServer(app);

export { app };
