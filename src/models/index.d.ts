import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HelpDeskSectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PopularItemTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PopularUrlMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FAQTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FAQMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResourceTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResourceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class HelpDeskSection {
  readonly id: string;
  readonly sectionName?: string;
  readonly sectionLogo?: string;
  readonly sectionLink?: string;
  readonly sectionDescription?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<HelpDeskSection, HelpDeskSectionMetaData>);
  static copyOf(source: HelpDeskSection, mutator: (draft: MutableModel<HelpDeskSection, HelpDeskSectionMetaData>) => MutableModel<HelpDeskSection, HelpDeskSectionMetaData> | void): HelpDeskSection;
}

export declare class PopularItemType {
  readonly id: string;
  readonly popularType?: string;
  readonly popularTypeLogo?: string;
  readonly popularUrls?: (PopularUrl | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PopularItemType, PopularItemTypeMetaData>);
  static copyOf(source: PopularItemType, mutator: (draft: MutableModel<PopularItemType, PopularItemTypeMetaData>) => MutableModel<PopularItemType, PopularItemTypeMetaData> | void): PopularItemType;
}

export declare class PopularUrl {
  readonly id: string;
  readonly url?: string;
  readonly urlName?: string;
  readonly popularItemTypeID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PopularUrl, PopularUrlMetaData>);
  static copyOf(source: PopularUrl, mutator: (draft: MutableModel<PopularUrl, PopularUrlMetaData>) => MutableModel<PopularUrl, PopularUrlMetaData> | void): PopularUrl;
}

export declare class FAQType {
  readonly id: string;
  readonly faqType?: string;
  readonly faqs?: (FAQ | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FAQType, FAQTypeMetaData>);
  static copyOf(source: FAQType, mutator: (draft: MutableModel<FAQType, FAQTypeMetaData>) => MutableModel<FAQType, FAQTypeMetaData> | void): FAQType;
}

export declare class FAQ {
  readonly id: string;
  readonly question?: string;
  readonly answer?: string;
  readonly faqTypeID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FAQ, FAQMetaData>);
  static copyOf(source: FAQ, mutator: (draft: MutableModel<FAQ, FAQMetaData>) => MutableModel<FAQ, FAQMetaData> | void): FAQ;
}

export declare class DocType {
  readonly id: string;
  readonly docType?: string;
  readonly docLogo?: string;
  readonly urlLogo?: string;
  readonly docs?: (Doc | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DocType, DocTypeMetaData>);
  static copyOf(source: DocType, mutator: (draft: MutableModel<DocType, DocTypeMetaData>) => MutableModel<DocType, DocTypeMetaData> | void): DocType;
}

export declare class Doc {
  readonly id: string;
  readonly url?: string;
  readonly urlName?: string;
  readonly docTypeID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Doc, DocMetaData>);
  static copyOf(source: Doc, mutator: (draft: MutableModel<Doc, DocMetaData>) => MutableModel<Doc, DocMetaData> | void): Doc;
}

export declare class ResourceType {
  readonly id: string;
  readonly resourceType?: string;
  readonly resourceLogo?: string;
  readonly urlLogo?: string;
  readonly resources?: (Resource | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ResourceType, ResourceTypeMetaData>);
  static copyOf(source: ResourceType, mutator: (draft: MutableModel<ResourceType, ResourceTypeMetaData>) => MutableModel<ResourceType, ResourceTypeMetaData> | void): ResourceType;
}

export declare class Resource {
  readonly id: string;
  readonly url?: string;
  readonly urlName?: string;
  readonly resourceTypeID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Resource, ResourceMetaData>);
  static copyOf(source: Resource, mutator: (draft: MutableModel<Resource, ResourceMetaData>) => MutableModel<Resource, ResourceMetaData> | void): Resource;
}