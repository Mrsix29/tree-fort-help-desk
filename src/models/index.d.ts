import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FAQTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FAQMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class FAQType {
  readonly id: string;
  readonly faqType: string;
  readonly faqs?: (FAQ | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FAQType, FAQTypeMetaData>);
  static copyOf(source: FAQType, mutator: (draft: MutableModel<FAQType, FAQTypeMetaData>) => MutableModel<FAQType, FAQTypeMetaData> | void): FAQType;
}

export declare class FAQ {
  readonly id: string;
  readonly faqType?: FAQType;
  readonly question: string;
  readonly answer: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FAQ, FAQMetaData>);
  static copyOf(source: FAQ, mutator: (draft: MutableModel<FAQ, FAQMetaData>) => MutableModel<FAQ, FAQMetaData> | void): FAQ;
}