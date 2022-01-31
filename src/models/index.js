// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FAQType, FAQ } = initSchema(schema);

export {
  FAQType,
  FAQ
};