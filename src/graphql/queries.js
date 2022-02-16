/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHelpDeskSection = /* GraphQL */ `
  query GetHelpDeskSection($id: ID!) {
    getHelpDeskSection(id: $id) {
      id
      sectionName
      sectionLogo
      sectionLink
      sectionDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHelpDeskSections = /* GraphQL */ `
  query ListHelpDeskSections(
    $filter: ModelHelpDeskSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHelpDeskSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sectionName
        sectionLogo
        sectionLink
        sectionDescription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHelpDeskSections = /* GraphQL */ `
  query SyncHelpDeskSections(
    $filter: ModelHelpDeskSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHelpDeskSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sectionName
        sectionLogo
        sectionLink
        sectionDescription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPopularItemType = /* GraphQL */ `
  query GetPopularItemType($id: ID!) {
    getPopularItemType(id: $id) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPopularItemTypes = /* GraphQL */ `
  query ListPopularItemTypes(
    $filter: ModelPopularItemTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPopularItemTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        popularType
        popularTypeLogo
        popularUrls {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPopularItemTypes = /* GraphQL */ `
  query SyncPopularItemTypes(
    $filter: ModelPopularItemTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPopularItemTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        popularType
        popularTypeLogo
        popularUrls {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPopularUrl = /* GraphQL */ `
  query GetPopularUrl($id: ID!) {
    getPopularUrl(id: $id) {
      id
      url
      urlName
      popularItemTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPopularUrls = /* GraphQL */ `
  query ListPopularUrls(
    $filter: ModelPopularUrlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPopularUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        urlName
        popularItemTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPopularUrls = /* GraphQL */ `
  query SyncPopularUrls(
    $filter: ModelPopularUrlFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPopularUrls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        urlName
        popularItemTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFAQType = /* GraphQL */ `
  query GetFAQType($id: ID!) {
    getFAQType(id: $id) {
      id
      faqType
      faqs {
        items {
          id
          question
          answer
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFAQTypes = /* GraphQL */ `
  query ListFAQTypes(
    $filter: ModelFAQTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        faqType
        faqs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFAQTypes = /* GraphQL */ `
  query SyncFAQTypes(
    $filter: ModelFAQTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFAQTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        faqType
        faqs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFAQ = /* GraphQL */ `
  query GetFAQ($id: ID!) {
    getFAQ(id: $id) {
      id
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFAQS = /* GraphQL */ `
  query ListFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        faqTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFAQS = /* GraphQL */ `
  query SyncFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFAQS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question
        answer
        faqTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDocType = /* GraphQL */ `
  query GetDocType($id: ID!) {
    getDocType(id: $id) {
      id
      docType
      docLogo
      urlLogo
      docs {
        items {
          id
          url
          urlName
          docTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDocTypes = /* GraphQL */ `
  query ListDocTypes(
    $filter: ModelDocTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        docType
        docLogo
        urlLogo
        docs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDocTypes = /* GraphQL */ `
  query SyncDocTypes(
    $filter: ModelDocTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        docType
        docLogo
        urlLogo
        docs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDoc = /* GraphQL */ `
  query GetDoc($id: ID!) {
    getDoc(id: $id) {
      id
      url
      urlName
      docTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDocs = /* GraphQL */ `
  query ListDocs(
    $filter: ModelDocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        urlName
        docTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDocs = /* GraphQL */ `
  query SyncDocs(
    $filter: ModelDocFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        urlName
        docTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getResourceType = /* GraphQL */ `
  query GetResourceType($id: ID!) {
    getResourceType(id: $id) {
      id
      resourceType
      resourceLogo
      urlLogo
      resources {
        items {
          id
          url
          urlName
          resourceTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listResourceTypes = /* GraphQL */ `
  query ListResourceTypes(
    $filter: ModelResourceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResourceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resourceType
        resourceLogo
        urlLogo
        resources {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResourceTypes = /* GraphQL */ `
  query SyncResourceTypes(
    $filter: ModelResourceTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResourceTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        resourceType
        resourceLogo
        urlLogo
        resources {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      url
      urlName
      resourceTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        urlName
        resourceTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResources = /* GraphQL */ `
  query SyncResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        urlName
        resourceTypeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSupportRequestForm = /* GraphQL */ `
  query GetSupportRequestForm($id: ID!) {
    getSupportRequestForm(id: $id) {
      id
      lname
      fname
      email
      phone
      message
      attachment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSupportRequestForms = /* GraphQL */ `
  query ListSupportRequestForms(
    $filter: ModelSupportRequestFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupportRequestForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lname
        fname
        email
        phone
        message
        attachment
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSupportRequestForms = /* GraphQL */ `
  query SyncSupportRequestForms(
    $filter: ModelSupportRequestFormFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSupportRequestForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        lname
        fname
        email
        phone
        message
        attachment
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
