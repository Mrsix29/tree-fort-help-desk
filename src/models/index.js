// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HelpDeskSection, PopularItemType, PopularUrl, FAQType, FAQ, DocType, Doc, ResourceType, Resource } = initSchema(schema);

export {
  HelpDeskSection,
  PopularItemType,
  PopularUrl,
  FAQType,
  FAQ,
  DocType,
  Doc,
  ResourceType,
  Resource
};